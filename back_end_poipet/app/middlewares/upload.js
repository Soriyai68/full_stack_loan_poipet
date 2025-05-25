const util = require("util");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const dbConfig = require("../config/db.config");

const mongoUrl = `mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`;

var storage = new GridFsStorage({
  url: mongoUrl,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];
    const userId = req.query.userId;
    const documentType = req.query.documentType; // Get documentType from query params
    const assignedImage = req.query.assigned_image; // Get assigned_image from query params

    if (!userId) {
      console.error("userId is missing in the request query for file upload.");
      throw new Error("userId is required for file upload.");
    }

    if (!documentType) {
      console.error("documentType is missing in the request query for file upload.");
      throw new Error("documentType is required for file upload.");
    }

    // You might want to add a check for assignedImage if it's mandatory
    // if (!assignedImage) {
    //   console.error("assigned_image is missing in the request query for file upload.");
    //   throw new Error("assigned_image is required for file upload.");
    // }

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-soriya-${file.originalname}`;
      return { filename: filename, metadata: { userId, documentType, assigned_image: assignedImage } };
    }

    return {
      bucketName: dbConfig.imgBucket,
      filename: `${Date.now()}-soriya-${file.originalname}`,
      metadata: { userId, documentType, assigned_image: assignedImage }, // Include assigned_image here
    };
  },
});

var uploadFiles = multer({ storage: storage }).array("file", 10);
var uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;