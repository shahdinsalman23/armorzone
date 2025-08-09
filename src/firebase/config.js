import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7ruPJk30sJoaiH5-WGJDy13B_MAu6udk",
  authDomain: "armorzone-52a2f.firebaseapp.com",
  projectId: "armorzone-52a2f",
  storageBucket: "armorzone-52a2f.firebasestorage.app",
  messagingSenderId: "541971421793",
  appId: "1:541971421793:web:be87e957cb548e9d95e820"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Auth
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };