import * as functions from "firebase-functions";


// The Firebase Admin SDK to access Firestore.
// const admin = require('firebase-admin');
// admin.initializeApp();

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
