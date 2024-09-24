const mongoose = require("mongoose");

const displaySchema = mongoose.Schema(
  {
    displayNumber: { type: Number, required: true },
    posters: [String], // Liste des affiches
    publications: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Publication" },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Display", displaySchema);
