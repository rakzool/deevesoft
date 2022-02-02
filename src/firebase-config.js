import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSzjwRkGmKbEmxNcAC_CFxUhmnYGKDmAg",
  authDomain: "amatarasu-development.firebaseapp.com",
  projectId: "amatarasu-development",
  storageBucket: "amatarasu-development.appspot.com",
  messagingSenderId: "127694553651",
  appId: "1:127694553651:web:f26a214329268f383d9946",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
