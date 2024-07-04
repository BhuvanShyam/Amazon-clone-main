
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCCfWi3FUjbfvSgIm-Vrex466AwYXZ5peg",
  authDomain: "clone-19bf9.firebaseapp.com",
  projectId: "clone-19bf9",
  storageBucket: "clone-19bf9.appspot.com",
  messagingSenderId: "1056691031856",
  appId: "1:1056691031856:web:004b1253546e19f085c2f5",
  measurementId: "G-5X42X16Y7Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
