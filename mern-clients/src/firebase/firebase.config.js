// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ Import getAuth
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvf8zJfDBU7tfU9KWKkXj05J4h6P8v1Xs",
  authDomain: "mern-book-inventory-da2bc.firebaseapp.com",
  projectId: "mern-book-inventory-da2bc",
  storageBucket: "mern-book-inventory-da2bc.appspot.com", // ✅ Fixed the incorrect domain
  messagingSenderId: "549528730879",
  appId: "1:549528730879:web:3d141f2129d280f1de60ca",
  measurementId: "G-NVFM59YR9K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // ✅ Initialize auth
const analytics = getAnalytics(app);

export { app, auth }; // ✅ Export auth
export default app; // ✅ Export app as default