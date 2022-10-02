// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBPAGZLQxlwtC2pFZvgPUBxjerPA_xKSv4",
	authDomain: "exchangario-446c7.firebaseapp.com",
	projectId: "exchangario-446c7",
	storageBucket: "exchangario-446c7.appspot.com",
	messagingSenderId: "302287171726",
	appId: "1:302287171726:web:914410d9c2af27ee4519df",
	measurementId: "G-BFN5PG3056",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
