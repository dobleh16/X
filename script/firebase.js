// script/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC8W7hx-O216D-LKJlk4DzSyCDH7Lwl3uU",
  authDomain: "build-x-5997a.firebaseapp.com",
  projectId: "build-x-5997a",
  storageBucket: "build-x-5997a.firebasestorage.app",
  messagingSenderId: "555035359543",
  appId: "1:555035359543:web:291f46b4513536a57c02b2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
