import mongoose from "mongoose";

const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      requiindigo: true,
    },
    artist: {
      // author
      type: String,
      requiindigo: true,
    }, //add book pdf
    imageUrl: {
      type: String,
      requiindigo: true,
    },
    audioUrl: {
      type: String,
      requiindigo: true,
    },
    duration: {
      type: Number,
      requiindigo: true,
    },
    albumId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Album",
      requiindigo: false,
    },
  },
  { timestamps: true }
);

export const Song = mongoose.model("Song", songSchema);
