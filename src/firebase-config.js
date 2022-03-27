// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzPfuvryU9N3WHQ-vB7a0aY1cHABXQsAU",
  authDomain: "marine2-f2279.firebaseapp.com",
  projectId: "marine2-f2279",
  storageBucket: "marine2-f2279.appspot.com",
  messagingSenderId: "288690639823",
  appId: "1:288690639823:web:9a5dc6c72527f056a1f8ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ORIGINAL CODE BELOW
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDlMrgvMnufzgSaKMrEHgMe7Qkc0XNihjo",
//   authDomain: "marine-21ee0.firebaseapp.com",
//   projectId: "marine-21ee0",
//   storageBucket: "marine-21ee0.appspot.com",
//   messagingSenderId: "650339080137",
//   appId: "1:650339080137:web:ce325f53aeed0600d83a18"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
