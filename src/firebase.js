import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuYVHA7w5STXiQiU448j3p6wxpfiJP5ug",
  authDomain: "challenge-f7a6f.firebaseapp.com",
  projectId: "challenge-f7a6f",
  storageBucket: "challenge-f7a6f.appspot.com",
  messagingSenderId: "17599672833",
  appId: "1:17599672833:web:4734dd82dd7cfb7ab7c600",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(firebaseApp);
const auth = firebase.auth();

export { db, auth };
