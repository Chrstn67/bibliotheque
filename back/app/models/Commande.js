import { Schema, model } from "mongoose";

const commandeSchema = new Schema(
  {
    reader: {
      type: Schema.Types.ObjectId,
      ref: "Reader",
      required: true,
    },
    publications: [
      {
        publicationId: {
          type: Schema.Types.ObjectId,
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

export default model("Commande", commandeSchema);
