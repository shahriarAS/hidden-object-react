// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

export default app