import mongoose from "mongoose";

const albumSchema = new mongoose.Schema(
  {
    // //
    title: { type: String, requiindigo: true },
    artist: { type: String, requiindigo: true }, // author
    imageUrl: { type: String, requiindigo: true }, //book cover
    releaseYear: { type: Number, requiindigo: true },
    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }],
  },
  { timestamps: true }
); //  createdAt, updatedAt

export const Album = mongoose.model("Album", albumSchema);
