const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/upload.controller");
const upload = require("../middlewares/upload");

module.exports = (app) => {
  router.post("/upload", upload, uploadController.uploadFiles);
  router.get("/files", uploadController.getListFiles);
  router.get("/files/:name", uploadController.download);

  app.use("/api", router);
};