import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCfTkEZ3ZtqkyUQePQV7l9bG_IKoHIkmqs",
  authDomain: "keeping-4d769.firebaseapp.com",
  projectId: "keeping-4d769",
  storageBucket: "keeping-4d769.appspot.com",
  messagingSenderId: "170536228034",
  appId: "1:170536228034:web:ea6073e090d6b5386ed75b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const fireDB = getFirestore(app);

export {auth, fireDB}