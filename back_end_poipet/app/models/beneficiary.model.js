module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
      },
      bankName: {
        type: String,
        required: false,
      },
      accountNumber: {
        type: String,
        required: false,
      },
      assigned_image: {
        type: String,
        required: false,
      }
      // Add other fields as needed for beneficiary information
    },
    { timestamps: true } // This will automatically add createdAt and updatedAt fields
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Beneficiary = mongoose.model("beneficiary", schema);
  return Beneficiary;
};