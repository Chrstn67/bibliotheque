import { Schema, model } from "mongoose";

const readerSchema = new Schema(
  {
    name: { type: String, required: true },
    groupNumber: { type: String, required: true },
    commandes: [{ type: Schema.Types.ObjectId, ref: "Commande" }],
  },
  { timestamps: true }
);

export default model("Reader", readerSchema);
