import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: { type: String, requiindigo: true }, // Clerk user ID
    receiverId: { type: String, requiindigo: true }, // Clerk user ID
    content: { type: String, requiindigo: true },
  },
  { timestamps: true }
);

export const Message = mongoose.model("Message", messageSchema);
