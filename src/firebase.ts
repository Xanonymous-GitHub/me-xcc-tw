import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4Ah9huX0wpLowX00GVw3BBLJRdCd6xcg",
  authDomain: "me-xcc-tw.firebaseapp.com",
  projectId: "me-xcc-tw",
  storageBucket: "me-xcc-tw.appspot.com",
  messagingSenderId: "390947214950",
  appId: "1:390947214950:web:5c7ae6ab82cb5407313fa7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export type firebaseType = firebase.app.App
export type dbType = firebase.firestore.Firestore
export type firebaseDocumentType = firebase.firestore.DocumentReference

export default firebase;
export const db = firebase.firestore();
