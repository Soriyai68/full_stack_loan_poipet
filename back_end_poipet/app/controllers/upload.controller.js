const upload = require("../middlewares/upload");
const dbConfig = require("../config/db.config");

const MongoClient = require("mongodb").MongoClient;
const GridFSBucket = require("mongodb").GridFSBucket;

// Construct the MongoDB URL from dbConfig
const mongoUrl = `mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`;

const baseUrl = "http://localhost:8080/api/files/"; // Updated baseUrl to match route

// Use the constructed URL here
const mongoClient = new MongoClient(mongoUrl);

const uploadFiles = async (req, res) => {
  try {
    const userId = req.query.userId;
    if (!userId) {
      return res.status(400).send({ message: "userId is required for upload." });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).send({ message: "You must select at least 1 file." });
    }

    return res.status(200).send({
      message: "Files have been uploaded successfully.",
      files: req.files.map((file) => ({
        filename: file.filename,
        url: `${baseUrl}${file.filename}`,
      })),
    });
  } catch (error) {
    console.error("Error during file upload:", error);
    if (error.code === "LIMIT_UNEXPECTED_FILE") {
      return res.status(400).send({ message: "Too many files to upload." });
    }
    if (error.message === "userId is required for file upload.") {
      return res.status(400).send({ message: error.message });
    }
    return res.status(500).send({
      message: `Error when trying to upload files: ${error.message || error}`,
    });
  }
};

// Updated getListFiles to use GridFS and filter by userId
const getListFiles = async (req, res) => {
  try {
    await mongoClient.connect();

    const database = mongoClient.db(dbConfig.DB); // Use dbConfig.DB
    const bucket = new GridFSBucket(database, {
      bucketName: dbConfig.imgBucket,
    });

    const userId = req.query.userId; // Get userId from query parameters

    if (!userId) {
      return res.status(400).send({
        message: "userId query parameter is required."
      });
    }

    // Find files in GridFS where metadata.userId matches the provided userId
    const cursor = bucket.find({
      'metadata.userId': userId
    });

    let fileInfos = [];
    await cursor.forEach((file) => {
      fileInfos.push({
        name: file.filename,
        url: baseUrl + file.filename,
        metadata: file.metadata // This line includes the metadata
      });
    });

    res.status(200).send(fileInfos);
  } catch (error) {
    console.error("Error fetching files:", error);
    res.status(500).send({
      message: "Unable to retrieve files!",
    });
  } finally {
     // mongoClient.close();
  }
};

const download = async (req, res) => {
  try {
    await mongoClient.connect();

    const database = mongoClient.db(dbConfig.DB); // Use dbConfig.DB
    const bucket = new GridFSBucket(database, {
      bucketName: dbConfig.imgBucket,
    });

    const filename = req.params.name;

    // Optional: Add logic here to verify the user requesting the download
    // is the owner of the file based on metadata, if needed.
    // This would require getting the userId from the request (e.g., query param)
    // and checking the file's metadata before opening the download stream.

    let downloadStream = bucket.openDownloadStreamByName(filename);

    downloadStream.on("data", function (data) {
      return res.status(200).write(data);
    });

    downloadStream.on("error", function (err) {
      console.error("Error during file download:", err);
      return res.status(404).send({ message: "Cannot download the Image! File not found or error occurred." });
    });

    downloadStream.on("end", () => {
      return res.end();
    });
  } catch (error) {
    console.error("Error in download function:", error);
    return res.status(500).send({
      message: error.message || "Error downloading file!",
    });
  } finally {
     // mongoClient.close();
  }
};

module.exports = {
  uploadFiles,
  getListFiles,
  download,
};
