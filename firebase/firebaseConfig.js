import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUbtobIQZTwmsfrwmKXiktnmebDYUxK7E",
  authDomain: "tuster-a8dfe.firebaseapp.com",
  projectId: "tuster-a8dfe",
  storageBucket: "tuster-a8dfe.appspot.com",
  messagingSenderId: "614003407553",
  appId: "1:614003407553:web:68956480874062255c3240",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
