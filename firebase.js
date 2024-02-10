// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyCZbERVl2W1_fVpkBQaA7xgY7BaMTtW710",
authDomain: "react-todo-firebase-84d3c.firebaseapp.com",
databaseURL: "https://react-todo-firebase-84d3c-default-rtdb.europe-west1.firebasedatabase.app",
projectId: "react-todo-firebase-84d3c",
storageBucket: "react-todo-firebase-84d3c.appspot.com",
messagingSenderId: "694121743336",
appId: "1:694121743336:web:8b8b05099886d5fd91da5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);