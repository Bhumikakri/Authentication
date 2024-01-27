// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0Cj-zZdpWpzSRupg5ATtdnVt-6vUesKA",
  authDomain: "fir-1-74ab1.firebaseapp.com",
  projectId: "fir-1-74ab1",
  storageBucket: "fir-1-74ab1.appspot.com",
  messagingSenderId: "997996307960",
  appId: "1:997996307960:web:63d24d8ed87c3efc59220d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;