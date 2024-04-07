import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsR7ug57z-fhRdELanY28OrF108BROlds",
  authDomain: "react-bottle-2024.firebaseapp.com",
  projectId: "react-bottle-2024",
  storageBucket: "react-bottle-2024.appspot.com",
  messagingSenderId: "281840174621",
  appId: "1:281840174621:web:d59299c68114aff35a28f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
