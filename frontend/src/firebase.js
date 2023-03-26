// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS4V5j944YiS-rpNANHWcfTLJq5pwUT_s",
  authDomain: "uci-overflow.firebaseapp.com",
  projectId: "uci-overflow",
  storageBucket: "uci-overflow.appspot.com",
  messagingSenderId: "558485229321",
  appId: "1:558485229321:web:bb58b83398237f5be68dd8",
  measurementId: "G-RD5MYXZQ0H",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
// export default db;
