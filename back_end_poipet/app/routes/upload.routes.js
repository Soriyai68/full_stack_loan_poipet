const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/upload.controller");
const upload = require("../middlewares/upload");

let routes = (app) => {
  // Apply the upload middleware directly to the /upload route
  // The 'upload' middleware must come before the controller function
  router.post("/upload", upload, uploadController.uploadFiles);
  router.get("/files", uploadController.getListFiles);
  router.get("/files/:name", uploadController.download);

  app.use("/api", router);
};

module.exports = routes;