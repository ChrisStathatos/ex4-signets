import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyBXMXFNKCTgaTIlqmLQMDi6rEqGsEL782Y",
  authDomain: "pvt-h21-6325d.firebaseapp.com",
  databaseURL: "https://pvt-h21-6325d-default-rtdb.firebaseio.com",
  projectId: "pvt-h21-6325d",
  storageBucket: "pvt-h21-6325d.appspot.com",
  messagingSenderId: "333873683665",
  appId: "1:333873683665:web:c2cef6521d4a60a2f2b9f0"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
