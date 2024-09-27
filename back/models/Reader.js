const mongoose = require("mongoose");

const readerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    groupNumber: { type: String, required: true },
    commandes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Commande" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reader", readerSchema);
