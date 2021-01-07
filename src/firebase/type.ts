import firebase from "firebase";

export type firebaseType = firebase.app.App
export type dbType = firebase.firestore.Firestore
export type time = firebase.firestore.Timestamp

export interface WorkDocument {
  title: string;
  subtitle: string;
  thumbnail: string;
  createdAt: time;
}

export interface Work extends WorkDocument {
  readonly id: string;
}

