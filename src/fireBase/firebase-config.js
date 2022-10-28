import { initializeApp } from "firebase/app";
import { getFirestore as getFireStore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDd-USiYSsgJAdhrjAsWbvuB-oj0lWNiUI",
  authDomain: "learn-firebase-2cf3d.firebaseapp.com",
  projectId: "learn-firebase-2cf3d",
  storageBucket: "learn-firebase-2cf3d.appspot.com",
  messagingSenderId: "580830504223",
  appId: "1:580830504223:web:4919199eac370064487c2a",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//firebase auth
export const auth = getAuth(app);
// Init service
export const db = getFireStore(app);
