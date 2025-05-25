// models/customer.js
module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      name: { type: String, required: true, lowercase: true },
      idNumber: { type: String, required: true },
      gender: {
        type: String,
        required: true,
        enum: ["Male", "Female", "Other"],
      },
      dob: { type: Date, required: true },
      job: { type: String, required: true },
      income: { type: Number, required: true, min: 0 },
      loanPurpose: { type: String, required: true },
      address: { type: String, required: true },
      relativeName: { type: String, required: true },
      contact: { type: String, required: true },
      relativePhone: { type: String, required: true },
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Customer = mongoose.model("customer", schema);
  return Customer;
};
