require("dotenv").config();
const { MongoClient, GridFSBucket } = require("mongodb");

const mongoUrl = process.env.MONGO_URL;
const dbName = process.env.DB_NAME;
const bucketName = process.env.IMG_BUCKET || "photos";
const baseUrl = "http://localhost:8080/api/files/";

const mongoClient = new MongoClient(mongoUrl);

// Upload is already handled by multer middleware
const uploadFiles = async (req, res) => {
  try {
    const userId = req.query.userId;
    if (!userId) return res.status(400).send({ message: "userId is required." });

    if (!req.files || req.files.length === 0) {
      return res.status(400).send({ message: "No files uploaded." });
    }

    return res.status(200).send({
      message: "Files uploaded successfully.",
      files: req.files.map(file => ({
        filename: file.filename,
        url: `${baseUrl}${file.filename}`,
      })),
    });
  } catch (error) {
    console.error("Error during file upload:", error);
    return res.status(500).send({ message: error.message });
  }
};

const getListFiles = async (req, res) => {
  try {
    await mongoClient.connect();
    const database = mongoClient.db(dbName);
    const bucket = new GridFSBucket(database, { bucketName });

    const userId = req.query.userId;
    if (!userId) return res.status(400).send({ message: "userId query parameter is required." });

    const cursor = bucket.find({ 'metadata.userId': userId });
    const fileInfos = [];

    await cursor.forEach(file => {
      fileInfos.push({
        name: file.filename,
        url: baseUrl + file.filename,
        metadata: file.metadata
      });
    });

    res.status(200).send(fileInfos);
  } catch (error) {
    console.error("Error fetching files:", error);
    res.status(500).send({ message: "Unable to retrieve files!" });
  }
};

const download = async (req, res) => {
  try {
    await mongoClient.connect();
    const database = mongoClient.db(dbName);
    const bucket = new GridFSBucket(database, { bucketName });

    const filename = req.params.name;
    const downloadStream = bucket.openDownloadStreamByName(filename);

    downloadStream.on("data", data => res.write(data));
    downloadStream.on("error", () => res.status(404).send({ message: "File not found." }));
    downloadStream.on("end", () => res.end());
  } catch (error) {
    console.error("Error in download function:", error);
    res.status(500).send({ message: error.message });
  }
};

module.exports = { uploadFiles, getListFiles, download };
