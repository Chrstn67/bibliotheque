const mongoose = require("mongoose");

const readerSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    groupNumber: { type: String, required: true },
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Commande" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reader", readerSchema);
