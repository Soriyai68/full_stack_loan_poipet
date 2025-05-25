const db = require("../models");
const Loan = db.loans; // Assuming your loan model is registered as 'loans' in models/index.js

// Create and Save a new Loan
exports.create = (req, res) => {
  // Validate request
  if (!req.body.amount || !req.body.term || !req.body.userId) {
    res.status(400).send({ message: "User ID, amount, and term cannot be empty!" });
    return;
  }

  // Create a Loan
  const loan = new Loan({
    userId: req.body.userId,
    amount: req.body.amount,
    term: req.body.term,
    // interestRate is often defaulted or calculated, ensure your model handles this
    // monthlyPayment, totalInterest, totalPrincipalAndInterest are typically calculated fields
    // For simplicity, this example assumes they might be sent or handled by model/hooks
    // Or you might calculate them here before saving
    interestRate: req.body.interestRate, // Or use default from model
    monthlyPayment: req.body.monthlyPayment, // Potentially calculated
    totalInterest: req.body.totalInterest, // Potentially calculated
    totalPrincipalAndInterest: req.body.totalPrincipalAndInterest, // Potentially calculated
    ipAddress: req.ip // Capture IP address
  });

  // Save Loan in the database
  loan
    .save(loan)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Loan."
      });
    });
};

// Retrieve all Loans from the database.
exports.findAll = (req, res) => {
  const userId = req.query.userId;
  var condition = userId ? { userId: userId } : {};

  Loan.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving loans."
      });
    });
};

// Find a single Loan with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Loan.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Loan with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Loan with id=" + id });
    });
};

// Update a Loan by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  // Ensure not to update immutable fields like userId directly unless intended
  // Or handle calculated fields if inputs affecting them are changed
  Loan.findByIdAndUpdate(id, req.body, { useFindAndModify: false, new: true }) // new: true returns the modified document
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Loan with id=${id}. Maybe Loan was not found!`
        });
      } else res.send({ message: "Loan was updated successfully.", data: data });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Loan with id=" + id
      });
    });
};

// Delete a Loan with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Loan.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Loan with id=${id}. Maybe Loan was not found!`
        });
      } else {
        res.send({
          message: "Loan was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Loan with id=" + id
      });
    });
};

// Delete all Loans from the database (use with caution).
exports.deleteAll = (req, res) => {
  Loan.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Loans were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all loans."
      });
    });
};

// Example: Find all loans for a specific user (alternative to findAll with query param)
exports.findAllByUserId = (req, res) => {
  const userId = req.params.userId;
  if (!userId) {
    return res.status(400).send({ message: "User ID must be provided." });
  }

  Loan.find({ userId: userId })
    .then(data => {
      if (!data || data.length === 0) {
        return res.status(404).send({ message: "No loans found for user id " + userId });
      }
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving loans for user id=" + userId
      });
    });
};