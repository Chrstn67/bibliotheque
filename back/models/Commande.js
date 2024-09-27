const mongoose = require("mongoose");

const commandeSchema = new mongoose.Schema(
  {
    reader: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reader",
      required: true,
    },
    publications: [
      {
        publicationId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Publication",
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
    typeCommande: {
      type: String,
      enum: ["Annuelle", "Permanente"],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Commande", commandeSchema);
