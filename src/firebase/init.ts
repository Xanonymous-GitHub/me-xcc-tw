import firebase from "firebase/app";
import "firebase/firestore";
import {time} from "@/firebase/type";

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

export default firebase;
export const db = firebase.firestore();
export const getNewTimeStamp = (date: Date): time => {
  return firebase.firestore.Timestamp.fromDate(date)
}
