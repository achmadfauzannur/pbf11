import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseconfig = {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

        apiKey: "AIzaSyBx46QOJbPGvyL9XMua0dfKcnZcVsGQRIA",
        authDomain: "login-firebase-34357.firebaseapp.com",
        projectId: "login-firebase-34357",
        storageBucket: "login-firebase-34357.appspot.com",
        messagingSenderId: "295303055385",
        appId: "1:295303055385:web:4e9e34f1594acf049d8288",
        measurementId: "G-0XXG36Q95X"
      };
export const myFirebase = firebase.initializeApp(firebaseconfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;