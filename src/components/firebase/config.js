import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBqsQ5TLyxTNgY_pAn5TMK3G1C8GXVE5IM",
    authDomain: "money-track-a31a8.firebaseapp.com",
    projectId: "money-track-a31a8",
    storageBucket: "money-track-a31a8.appspot.com",
    messagingSenderId: "311365395780",
    appId: "1:311365395780:web:7eb62af0d0b8e38d60e311"
  };

// init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };