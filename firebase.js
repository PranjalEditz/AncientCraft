import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCDea2a-kzbVwR10XeW1o_jwYfHJLZycqg",
    authDomain: "gravility-d48c2.firebaseapp.com",
    projectId: "gravility-d48c2",
    storageBucket: "gravility-d48c2.appspot.com",
    messagingSenderId: "921434485644",
    appId: "1:921434485644:web:98088dea6d4ea3e7c1dca9",
    measurementId: "G-JP8Z6WB4RE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase;