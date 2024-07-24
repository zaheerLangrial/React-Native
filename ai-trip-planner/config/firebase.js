import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBY4_olQuusXyv8RSvYvabPsoGw2Gjuh3U",
  authDomain: "ai-trip-planner-df544.firebaseapp.com",
  projectId: "ai-trip-planner-df544",
  storageBucket: "ai-trip-planner-df544.appspot.com",
  messagingSenderId: "964752929250",
  appId: "1:964752929250:web:b2c8cd3fb576491f0cc9bb",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) 
export const fireDB = getFirestore(app)