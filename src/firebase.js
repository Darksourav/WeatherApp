import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCf7MVsrqzfVZZwh2HSmQB9HDJfQQpOYkY",
  authDomain: "weatherapp-bb4f2.firebaseapp.com",
  databaseURL: "https://weatherapp-bb4f2-default-rtdb.firebaseio.com",
  projectId: "weatherapp-bb4f2",
  storageBucket: "weatherapp-bb4f2.appspot.com",
  messagingSenderId: "174643362578",
  appId: "1:174643362578:web:464a8fe0682540da2451cb",
  measurementId: "G-EKGD1B1JL5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
// firebasefirestore.c
// console.log(auth.currentUser.uid);
export { app, auth };
