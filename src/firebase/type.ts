import firebase from "firebase";

export type firebaseType = firebase.app.App
export type dbType = firebase.firestore.Firestore
export type time = firebase.firestore.Timestamp
export type querySnapshot = firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>

export interface WorkDocument {
  title: string;
  subtitle: string;
  thumbnail: string;
  createdAt: time;
}

export interface Work extends WorkDocument {
  readonly id: string;
}

