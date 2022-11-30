// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyBBXCRGt-YLDhz4M9KcQbTqBsB-yZNirbw",
	authDomain: "media-7d6da.firebaseapp.com",
	projectId: "media-7d6da",
	storageBucket: "media-7d6da.appspot.com",
	messagingSenderId: "313482620085",
	appId: "1:313482620085:web:12a4f990c3db881e6522fc",
	measurementId: "G-763TZ6DQKF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// authentication
export const auth = getAuth(app);

// storage
export const storage = getStorage(app);
