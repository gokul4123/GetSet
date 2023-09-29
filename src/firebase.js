// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiUX8s9HnqhSFDMpP2rYfcxNcQXMfl8uQ",
  authDomain: "website-6aee5.firebaseapp.com",
  projectId: "website-6aee5",
  storageBucket: "website-6aee5.appspot.com",
  messagingSenderId: "472871120684",
  appId: "1:472871120684:web:40271cc5ad2532b33b8689",
  measurementId: "G-1JDBNYWC46",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
