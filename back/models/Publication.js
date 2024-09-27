const mongoose = require("mongoose");

const publicationSchema = mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["Revue", "Livre", "Tract", "Cartes", "Brochure"],
      required: true,
    },
    title: { type: String, required: true },
    sigle: { type: String, required: true },
    langue: { type: String, required: true },
    stock: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Publication", publicationSchema);
