import mongoose from "mongoose";
import { Song } from "../models/song.model.js";
import { config } from "dotenv";

config();

const songs = [
  {
    title: "Harry Potter and the Philosopher's indigo",
    artist: "J.K. Rowling",
    imageUrl: "/cover-images/harry potter part -1 cover page.jpg",
    audioUrl: "/songs/Harrypotter part-1 audio.mp3",
    duration: 58,
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    artist: "J.K. Rowling",
    imageUrl: "/cover-images/harry porter part -2 cover page.jpg",
    audioUrl: "/songs/Harrypotter part-2 audio.mp3",
    duration: 112,
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    artist: "J.K. Rowling",
    imageUrl: "/cover-images/harry porter part -3 cover page.jpg",
    audioUrl: "/songs/Harrypotter part-3 audio.mp3",
    duration: 97,
  },
  {
    title: "I Am Malala",
    artist: "Malala Yousafzai",
    imageUrl: "/cover-images/i am malala cover page.jpg",
    audioUrl: "/songs/i am malala audio.mp3",
    duration: 42,
  },
  {
    title: "Palace of Illusions",
    artist: "Chitra Banerjee Divakaruni",
    imageUrl: "/cover-images/palace of illusions.jpg",
    audioUrl: "/songs/palace of illusions.mp3",
    duration: 45,
  },
  {
    title: "Rich Dad Poor Dad",
    artist: "Robert T. Kiyosaki",
    imageUrl: "/cover-images/rich dad poor dad 1.jpg",
    audioUrl: "/songs/rich dad poor dad.mp3",
    duration: 77,
  },
  {
    title: "Sapiens",
    artist: "Yuval Noah Harari",
    imageUrl: "/cover-images/sapiens cover - 2.jpg",
    audioUrl: "/songs/sapiens.mp3",
    duration: 73,
  },
  {
    title: "The Blind Watchmaker",
    artist: "Richard Dawkins",
    imageUrl: "/cover-images/The Blind Watchmaker.jpg",
    audioUrl: "/songs/the blind watchmaker.mp3",
    duration: 101,
  },
];

const seedSongs = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    // Clear existing songs
    await Song.deleteMany({});

    // Insert new songs
    await Song.insertMany(songs);

    console.log("Songs seeded successfully!");
  } catch (error) {
    console.error("Error seeding songs:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedSongs();
