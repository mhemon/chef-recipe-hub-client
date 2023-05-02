// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG1-f64XzG1k5NxrqQMmlybSmVbQyOKeM",
  authDomain: "chef-s-recipe-hub.firebaseapp.com",
  projectId: "chef-s-recipe-hub",
  storageBucket: "chef-s-recipe-hub.appspot.com",
  messagingSenderId: "1031659340376",
  appId: "1:1031659340376:web:a9943ab8f897fc4ea1c02d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);