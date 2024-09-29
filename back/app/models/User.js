import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "publications", "presentoirs"],
      required: true,
    },
  },
  { timestamps: true }
);

export default model("User", userSchema);
