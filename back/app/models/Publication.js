import { Schema, model } from "mongoose";

const publicationSchema = Schema(
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

export default model("Publication", publicationSchema);
