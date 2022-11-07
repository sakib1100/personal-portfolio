// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/app';
 // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNtNRjLJM9Nt2D9Em8bi3RwQ50W7GBM5E",
  authDomain: "my-portfolio-bc381.firebaseapp.com",
  projectId: "my-portfolio-bc381",
  storageBucket: "my-portfolio-bc381.appspot.com",
  messagingSenderId: "548899925557",
  appId: "1:548899925557:web:09fb368ec6d6f475eccb7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);
export default auth;
