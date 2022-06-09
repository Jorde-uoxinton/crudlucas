// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqKo1ku3idTr8uax23RlLPLG0Xmia1dOk",
    authDomain: "crud-76a2d.firebaseapp.com",
    projectId: "crud-76a2d",
    storageBucket: "crud-76a2d.appspot.com",
    messagingSenderId: "183155289983",
    appId: "1:183155289983:web:c221251cde36655679744a",
    measurementId: "G-DYRC17EX95"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)