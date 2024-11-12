import mongoose from "mongoose";
import { Song } from "../models/song.model.js";
import { Album } from "../models/album.model.js";
import { config } from "dotenv";

config();

const seedDatabase = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI);

		// Clear existing data
		await Album.deleteMany({});
		await Song.deleteMany({});

		// First, create all songs
		const createdSongs = await Song.insertMany([
			{
				title: "Harry Potter and the Philosopher's Stone",
				artist: "J.K. Rowling",
				imageUrl: "/cover-images/harry potter part -1 cover page.jpg",
				audioUrl: "/songs/harry porter part-1 audio.mp3",
				duration: 52,
			  },
			  {
				title: "Harry Potter and the Chamber of Secrets",
				artist: "J.K. Rowling",
				imageUrl: "/cover-images/harry porter part -2 cover page.jpg",
				audioUrl: "/songs/harry porter part-2 audio.mp3",
				duration: 50,
			  },
			  {
				title: "Harry Potter and the Prisoner of Azkaban",
				artist: "J.K. Rowling",
				imageUrl: "/cover-images/harry porter part -3 cover page.jpg",
				audioUrl: "/songs/harry porter part-3 audio.mp3",
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
				title: "Sapiens",
				artist: "Yuval Noah Harari",
				imageUrl: "/cover-images/sapiens cover - 2.jpg",
				audioUrl: "/songs/sapiens.mp3",
				duration: 73,
			  },
			  {
				title: "Palace of Illusions",
				artist: "Chitra Banerjee Divakaruni",
				imageUrl: "/cover-images/palace of illusions.jpg",
				audioUrl: "/songs/palace of illusions.mp3",
				duration: 45,
			  },
			  {//6
				title: "Rich Dad Poor Dad",
				artist: "Robert T. Kiyosaki",
				imageUrl: "/cover-images/rich dad poor dad 1.jpg",
				audioUrl: "/songs/rich dad poor dad.mp3",
				duration: 77,
			  },
			  {//7
				title: "The Blind Watchmaker",
				artist: "Richard Dawkins",
				imageUrl: "/cover-images/The Blind Watchmaker.jpg",
				audioUrl: "/songs/the blind watchmaker.mp3",
				duration: 101,
			  },
			
		]);

		// Create albums with references to song IDs
		const albums = [
			{
				title: "Harry Potter",
				artist: "JK Rowling",
				imageUrl: "/albums/fantasy.jpg", //done
				releaseYear: 1997-2007,
				songs: createdSongs.slice(0, 3).map((song) => song._id),
			},
			{
				title: "Autobiography / Biography",
				artist: "Malala Yousafzai, Sapiens",
				imageUrl: "/albums/biography.jpg", //done
				releaseYear: 2013-2011,
				songs: createdSongs.slice(3, 5).map((song) => song._id),
			},
			{
				title: "Novel",
				artist: "Chitra Banerjee Divakaruni",
				imageUrl: "/albums/Novel.jpg", //done
				releaseYear: 2008-2003,
				songs: createdSongs.slice(5, 6).map((song) => song._id),	
			},
			{
				title: "Finance",
				artist: "Robert Kiyosaki",
				imageUrl: "/albums/finance.jpg", //done
				releaseYear: 1997,
				songs: createdSongs.slice(6, 7).map((song) => song._id),	
			},
			{
				title: "Non-fiction",
				artist: "Richard Dawkins",
				imageUrl: "/albums/non-fiction.jpg", //done
				releaseYear: 1986,
				songs: createdSongs.slice(-1).map((song) => song._id),	
			},
		];

		// Insert all albums
		const createdAlbums = await Album.insertMany(albums);

		// Update songs with their album references
		for (let i = 0; i < createdAlbums.length; i++) {
			const album = createdAlbums[i];
			const albumSongs = albums[i].songs;

			await Song.updateMany({ _id: { $in: albumSongs } }, { albumId: album._id });
		}

		console.log("Database seeded successfully!");
	} catch (error) {
		console.error("Error seeding database:", error);
	} finally {
		mongoose.connection.close();
	}
};

seedDatabase();
