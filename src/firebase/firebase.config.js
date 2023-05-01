// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnsZ0AdgnBsK3TWmctZ2T7AY_7K7SlYLU",
  authDomain: "wings-bakers-assignment10.firebaseapp.com",
  projectId: "wings-bakers-assignment10",
  storageBucket: "wings-bakers-assignment10.appspot.com",
  messagingSenderId: "435106151639",
  appId: "1:435106151639:web:b1d6fa39c833b3073a4492"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;