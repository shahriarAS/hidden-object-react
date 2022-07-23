import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqfdaHhuK5Alyn9TxEyBIE8ATPkeg-doc",
  authDomain: "picture-find-game.firebaseapp.com",
  projectId: "picture-find-game",
  storageBucket: "picture-find-game.appspot.com",
  messagingSenderId: "1062017123374",
  appId: "1:1062017123374:web:1dd55770c55ea59ac98bbf",
  measurementId: "G-B18HG4H717"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
