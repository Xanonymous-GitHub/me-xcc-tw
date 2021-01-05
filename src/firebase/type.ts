import firebase from "firebase";
import firestore = firebase.firestore;

export type firebaseType = firebase.app.App
export type dbType = firebase.firestore.Firestore

export interface Work {
  title: string,
  subtitle: string,
  thumbnail: string
  createdAt: firestore.Timestamp
}
