
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDEOt_-8SKmsVqKeXlKBq9t4HZ9dPcDFkc",
  authDomain: "elle-s-portfolio.firebaseapp.com",
  projectId: "elle-s-portfolio",
  storageBucket: "elle-s-portfolio.appspot.com",
  messagingSenderId: "115114242293",
  appId: "1:115114242293:web:4ad0ece13675011f2595bc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage (app);
const db = getFirestore(app);
export { auth, storage, db }