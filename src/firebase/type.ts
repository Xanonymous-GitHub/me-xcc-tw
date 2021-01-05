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

export type Response<T> = Promise<T | ResponseError>

export interface ResponseError {
  readonly statusCode?: number,
  readonly message?: string
}

export interface UploadedMedia {
  url: string
}
