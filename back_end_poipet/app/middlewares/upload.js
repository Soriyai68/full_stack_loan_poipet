const util = require("util");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
require("dotenv").config();

const mongoUrl = process.env.MONGO_URL;
const bucketName = process.env.IMG_BUCKET || "photos";

var storage = new GridFsStorage({
  url: mongoUrl,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];
    const userId = req.query.userId;
    const documentType = req.query.documentType;
    const assignedImage = req.query.assigned_image;

    if (!userId) throw new Error("userId is required for file upload.");
    if (!documentType) throw new Error("documentType is required for file upload.");

    const filename = `${Date.now()}-soriya-${file.originalname}`;

    return {
      bucketName: bucketName,
      filename: filename,
      metadata: { userId, documentType, assigned_image: assignedImage || null }
    };
  },
});

var uploadFiles = multer({ storage }).array("file", 10);
module.exports = util.promisify(uploadFiles);
