
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyB-DHJQY1N9jQS0u_9IDLoL5fJQLj5XEbE",
  authDomain: "yelpclone-53bca.firebaseapp.com",
  projectId: "yelpclone-53bca",
  storageBucket: "yelpclone-53bca.appspot.com",
  messagingSenderId: "582694726646",
  appId: "1:582694726646:web:52462b19462d5dd466b5d7",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);