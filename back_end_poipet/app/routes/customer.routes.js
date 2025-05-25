module.exports = app => {
  const customers = require("../controllers/customer.controller.js");
  const { authJwt } = require("../middlewares"); // Assuming you want to protect these routes

  var router = require("express").Router();

  // Create a new Customer
  router.post("/", [authJwt.verifyToken], customers.create);

  // Retrieve all Customers
  router.get("/", [authJwt.verifyToken], customers.findAll);

  // Retrieve a single Customer with id
  router.get("/:id", [authJwt.verifyToken], customers.findOne);

  // Update a Customer with id
  router.put("/:id", [authJwt.verifyToken], customers.update);

  // Delete a Customer with id
  router.delete("/:id", [authJwt.verifyToken], customers.delete);

  // Delete all Customers (admin only - very destructive, use with extreme caution)
  router.delete("/", [authJwt.verifyToken, authJwt.isAdmin], customers.deleteAll);

  // Retrieve all customers for a specific user ID
  router.get("/user/:userId", [authJwt.verifyToken], customers.findAllByUserId);

  app.use("/api/customers", router);
};