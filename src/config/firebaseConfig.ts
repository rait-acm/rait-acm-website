// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCA9f5LEpZRdyPFlGJAC9bYigaWz3btgQ",
  authDomain: "rait-acm-338a4.firebaseapp.com",
  projectId: "rait-acm-338a4",
  storageBucket: "rait-acm-338a4.appspot.com",
  messagingSenderId: "915687817386",
  appId: "1:915687817386:web:f63dce0450fabbbe9610d3",
  measurementId: "G-D7EYVLC9VB",
};
const app = initializeApp(firebaseConfig);

// Export Stuff
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const googleProvider = new GoogleAuthProvider();
