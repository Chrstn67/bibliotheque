import { Schema, model } from "mongoose";

const displaySchema = Schema(
  {
    displayNumber: { type: Number, required: true },
    posters: [String], // Liste des affiches
    publications: [
      { type: Schema.Types.ObjectId, ref: "Publication" },
    ],
  },
  { timestamps: true }
);

export default model("Display", displaySchema);
