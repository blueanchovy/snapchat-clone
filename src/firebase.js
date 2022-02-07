import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtbdiZvC8rPwT2_BrgQQhCUtEPagrlg1o",
  authDomain: "manish-snapchat-clone.firebaseapp.com",
  projectId: "manish-snapchat-clone",
  storageBucket: "manish-snapchat-clone.appspot.com",
  messagingSenderId: "375411745618",
  appId: "1:375411745618:web:63737a31dd734f014f108b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);
const provider = new GoogleAuthProvider();

export { db, auth, provider, storage };
