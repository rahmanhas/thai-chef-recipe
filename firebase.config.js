// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyBbteHY-M30wFhNSW5JwsKX4zcBR278yZM",
  authDomain: "chef-recipe-hunter-rahmanhas.firebaseapp.com",
  projectId: "chef-recipe-hunter-rahmanhas",
  storageBucket: "chef-recipe-hunter-rahmanhas.appspot.com",
  messagingSenderId: "1094563010316",
  appId: "1:1094563010316:web:9de584a4916aae9d0c9b29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;