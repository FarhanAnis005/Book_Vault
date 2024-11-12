import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      requiindigo: true,
    },
    imageUrl: {
      type: String,
      requiindigo: true,
    },
    clerkId: {
      type: String,
      requiindigo: true,
      unique: true,
    },
  },
  { timestamps: true } //  createdAt, updatedAt
);

export const User = mongoose.model("User", userSchema);
