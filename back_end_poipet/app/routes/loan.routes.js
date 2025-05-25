module.exports = app => {
  const loans = require("../controllers/loan.controller.js");
  const { authJwt } = require("../middlewares"); // Assuming you want to protect these routes

  var router = require("express").Router();

  // Create a new Loan
  // All users (or specific roles) can apply for a loan
  router.post("/", [authJwt.verifyToken], loans.create);

  // Retrieve all Loans (potentially for admin/moderator or for a user to see their own loans)
  // If for specific user, controller logic needs to handle filtering by userId from token
  router.get("/", [authJwt.verifyToken], loans.findAll);

  // Retrieve a single Loan with id (user should only see their own, or admin sees all)
  router.get("/:id", [authJwt.verifyToken], loans.findOne);

  // Update a Loan with id (typically by user who owns it, or admin)
  router.put("/:id", [authJwt.verifyToken], loans.update);

  // Delete a Loan with id (typically by user who owns it, or admin)
  router.delete("/:id", [authJwt.verifyToken], loans.delete);

  // Delete all Loans (admin only - very destructive, use with extreme caution)
  router.delete("/", [authJwt.verifyToken, authJwt.isAdmin], loans.deleteAll);
  
  // Retrieve all loans for a specific user ID (e.g., for an admin to view a user's loans)
  // Or a user to view their own loans if the ID is their own and validated.
  router.get("/user/:userId", [authJwt.verifyToken], loans.findAllByUserId);

  app.use("/api/loans", router);
};
