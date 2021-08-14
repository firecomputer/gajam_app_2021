import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGE,
    messagingSenderId: process.env.REACT_APP_MESSAGING,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASURE
};

firebase.initializeApp(firebaseConfig);

export const fbInstance = firebase;

export const AuthService = firebase.auth();
export const dbService = firebase.firestore();