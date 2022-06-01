import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0IwnPqTwYXXpd3VxT2QfyEWghAG5Un9g",
  authDomain: "clone-edac6.firebaseapp.com",
  projectId: "clone-edac6",
  storageBucket: "clone-edac6.appspot.com",
  messagingSenderId: "15004668361",
  appId: "1:15004668361:web:19a86ce24612d37ede5818",
  measurementId: "G-7E74WXKJQZ",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };
