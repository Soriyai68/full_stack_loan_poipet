module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      amount: { type: Number, required: true, min: 150000, max: 60000000 },
      term: { type: Number, required: true, enum: [6, 12, 24, 36, 48, 56] },
      interestRate: { type: Number, required: true, default: 0.5 },
      monthlyPayment: { type: String, required: true },
      totalInterest: { type: String, required: true },
      totalPrincipalAndInterest: { type: String, required: true },
      ipAddress: { type: String }
    },
    { timestamps: true } // This will automatically add createdAt and updatedAt fields
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Loan = mongoose.model("loan", schema); // Changed model name to lowercase 'loan' as per convention in the example
  return Loan;
};