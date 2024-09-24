const mongoose = require("mongoose");

const publicationSchema = mongoose.Schema(
  {
    type: { type: String, required: true }, // e.g., Book, Journal
    title: { type: String, required: true },
    sigle: { type: String, required: true },
    stock: { type: Number, required: true }, // état des stocks
  },
  { timestamps: true }
);

module.exports = mongoose.model("Publication", publicationSchema);
