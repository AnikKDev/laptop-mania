// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANmT_BoUWH8P0KA6T5I9a9LHkuFRPZYFE",
    authDomain: "laptop-mania-client-side.firebaseapp.com",
    projectId: "laptop-mania-client-side",
    storageBucket: "laptop-mania-client-side.appspot.com",
    messagingSenderId: "1071851086112",
    appId: "1:1071851086112:web:fb3efa63b9f052076f3745"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;