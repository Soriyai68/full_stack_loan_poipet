const db = require("../models");
const Customer = db.customers; // Assuming your customer model is registered as 'customers' in models/index.js

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (
    !req.body.userId ||
    !req.body.name ||
    !req.body.idNumber ||
    !req.body.gender ||
    !req.body.dob ||
    !req.body.job ||
    !req.body.income ||
    !req.body.loanPurpose ||
    !req.body.address ||
    !req.body.relativeName ||
    !req.body.contact ||
    !req.body.relativePhone
  ) {
    res.status(400).send({ message: "All required fields must be provided!" });
    return;
  }

  // Create a Customer
  const customer = new Customer({
    userId: req.body.userId,
    name: req.body.name,
    idNumber: req.body.idNumber,
    gender: req.body.gender,
    dob: req.body.dob,
    job: req.body.job,
    income: req.body.income,
    loanPurpose: req.body.loanPurpose,
    address: req.body.address,
    relativeName: req.body.relativeName,
    contact: req.body.contact,
    relativePhone: req.body.relativePhone,
  });

  // Save Customer in the database
  customer
    .save(customer)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer.",
      });
    });
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  const userId = req.query.userId;
  var condition = userId ? { userId: userId } : {};

  Customer.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    });
};

// Find a single Customer with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Customer.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Customer with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Customer with id=" + id });
    });
};

// Update a Customer by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Customer.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
    new: true,
  }) // new: true returns the modified document
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Customer with id=${id}. Maybe Customer was not found!`,
        });
      } else
        res.send({ message: "Customer was updated successfully.", data: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Customer with id=" + id,
      });
    });
};

// Delete a Customer with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Customer.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Customer with id=${id}. Maybe Customer was not found!`,
        });
      } else {
        res.send({
          message: "Customer was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Customer with id=" + id,
      });
    });
};

// Delete all Customers from the database (use with caution).
exports.deleteAll = (req, res) => {
  Customer.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Customers were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all customers.",
      });
    });
};

// Example: Find all customers for a specific user (alternative to findAll with query param)
exports.findAllByUserId = (req, res) => {
  const userId = req.params.userId;
  if (!userId) {
    return res.status(400).send({ message: "User ID must be provided." });
  }

  Customer.find({ userId: userId })
    .then((data) => {
      if (!data || data.length === 0) {
        return res
          .status(404)
          .send({ message: "No customers found for user id " + userId });
      }
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving customers for user id=" + userId,
      });
    });
};
