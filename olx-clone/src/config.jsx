import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD8DNl8fag6VS9DmGse9POo3OFbO7cPbMk",
  authDomain: "olx-clone-4f9d4.firebaseapp.com",
  projectId: "olx-clone-4f9d4",
  storageBucket: "olx-clone-4f9d4.appspot.com",
  messagingSenderId: "184312868682",
  appId: "1:184312868682:web:94213fc2fa0f6dd1f69bb3",
  measurementId: "G-EKZRQ59GMS",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
