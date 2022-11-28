import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import { getAuth } from "firebase/auth";
import "firebase/functions";
// import * as firebaseui from "firebaseui";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app: any = initializeApp(firebaseConfig);

// export const db = firebase.firestore();
// export const storage = firebase.storage();
export const auth: any = getAuth(app);
// export const functions = firebase.functions();
// export const ui = new firebaseui.auth.AuthUI(firebase.auth());
