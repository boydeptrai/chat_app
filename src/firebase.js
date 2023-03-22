
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJp0R5CraE5WEQjWlA9M2Gr0xltBiN_aU",
  authDomain: "chat-app-c74cf.firebaseapp.com",
  projectId: "chat-app-c74cf",
  storageBucket: "chat-app-c74cf.appspot.com",
  messagingSenderId: "83166920504",
  appId: "1:83166920504:web:1837616c39cbacf0644bcd",
  measurementId: "G-4RG2CPZH2K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()