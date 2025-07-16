import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9ULsmJLrbRdDArepl3EXLVqMsMrTLKXs",
  authDomain: "miniblog-3bbe6.firebaseapp.com",
  projectId: "miniblog-3bbe6",
  storageBucket: "miniblog-3bbe6.firebasestorage.app",
  messagingSenderId: "781982136908",
  appId: "1:781982136908:web:8657aaa26aab277cf3d2e9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };
