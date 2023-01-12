import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
 

const firebaseConfig = {
  apiKey: "AIzaSyCjUbcSuy2w2pz7oG3g8MRSITJxRL2_XlE",
  authDomain: "chatapp-5ac68.firebaseapp.com",
  projectId: "chatapp-5ac68",
  storageBucket: "chatapp-5ac68.appspot.com",
  messagingSenderId: "669311845808",
  appId: "1:669311845808:web:320889c5d2740f1ae88275",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()