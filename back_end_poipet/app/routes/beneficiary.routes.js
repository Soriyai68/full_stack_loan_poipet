module.exports = app => {
  const beneficiarys = require("../controllers/beneficiary.controller.js");
  const { authJwt } = require("../middlewares"); // Assuming you want to protect these routes

  var router = require("express").Router();

  // Create a new Beneficiary
  router.post("/", [authJwt.verifyToken], beneficiarys.create);

  // Retrieve all Beneficiarys (potentially for admin/moderator or for a user to see their own)
  // If for specific user, controller logic needs to handle filtering by userId from token
  router.get("/", [authJwt.verifyToken], beneficiarys.findAll);

  // Retrieve a single Beneficiary with id (user should only see their own, or admin sees all)
  router.get("/:id", [authJwt.verifyToken], beneficiarys.findOne);

  // Update a Beneficiary with id (typically by user who owns it, or admin)
  router.put("/:id", [authJwt.verifyToken], beneficiarys.update);

  // Delete a Beneficiary with id (typically by user who owns it, or admin)
  router.delete("/:id", [authJwt.verifyToken], beneficiarys.delete);

  // Delete all Beneficiarys (admin only - very destructive, use with extreme caution)
  router.delete("/", [authJwt.verifyToken, authJwt.isAdmin], beneficiarys.deleteAll);

  // Retrieve all beneficiarys for a specific user ID
  router.get("/user/:userId", [authJwt.verifyToken], beneficiarys.findAllByUserId);

  app.use("/api/beneficiarys", router);
};