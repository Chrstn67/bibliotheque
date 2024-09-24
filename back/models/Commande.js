const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    reader: { type: mongoose.Schema.Types.ObjectId, ref: "Proclamateur" },
    publications: [{ title: String, quantity: Number }],
    orderType: {
      type: String,
      required: true,
      enum: ["annuelle", "permanente", "ponctuelle"], // Valeurs possibles pour orderType
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
