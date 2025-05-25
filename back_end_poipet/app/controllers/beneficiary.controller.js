const db = require("../models");
const Beneficiary = db.beneficiarys; // Assuming your beneficiary model is registered as 'beneficiarys' in models/index.js

// Create and Save a new Beneficiary
exports.create = (req, res) => {
  // Validate request
  if (!req.body.userId || !req.body.bankName || !req.body.accountNumber) {
    res.status(400).send({ message: "User ID, Bank Name, and Account Number cannot be empty!" });
    return;
  }

  // Create a Beneficiary
  const beneficiary = new Beneficiary({
    userId: req.body.userId,
    bankName: req.body.bankName,
    accountNumber: req.body.accountNumber,
    assigned_image: req.body.assigned_image, // Add the new field
    // Add other fields as needed
  });

  // Save Beneficiary in the database
  beneficiary
    .save(beneficiary)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Beneficiary."
      });
    });
};

// Retrieve all Beneficiarys from the database.
exports.findAll = (req, res) => {
  const userId = req.query.userId;
  var condition = userId ? { userId: userId } : {};

  Beneficiary.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving beneficiarys."
      });
    });
};

// Find a single Beneficiary with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Beneficiary.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Beneficiary with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Beneficiary with id=" + id });
    });
};

// Update a Beneficiary by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Beneficiary.findByIdAndUpdate(id, req.body, { useFindAndModify: false, new: true }) // new: true returns the modified document
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Beneficiary with id=${id}. Maybe Beneficiary was not found!`
        });
      } else res.send({ message: "Beneficiary was updated successfully.", data: data });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Beneficiary with id=" + id
      });
    });
};

// Delete a Beneficiary with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Beneficiary.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Beneficiary with id=${id}. Maybe Beneficiary was not found!`
        });
      } else {
        res.send({
          message: "Beneficiary was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Beneficiary with id=" + id
      });
    });
};

// Delete all Beneficiarys from the database (use with caution).
exports.deleteAll = (req, res) => {
  Beneficiary.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Beneficiarys were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all beneficiarys."
      });
    });
};

// Example: Find all beneficiarys for a specific user (alternative to findAll with query param)
exports.findAllByUserId = (req, res) => {
  const userId = req.params.userId;
  if (!userId) {
    return res.status(400).send({ message: "User ID must be provided." });
  }

  Beneficiary.find({ userId: userId })
    .then(data => {
      if (!data || data.length === 0) {
        return res.status(404).send({ message: "No beneficiarys found for user id " + userId });
      }
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving beneficiarys for user id=" + userId
      });
    });
};