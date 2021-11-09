// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import 'firebase/storage'; 

// import firebase from "firebase/compat/app"

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"


const firebaseConfig = {
    apiKey: "AIzaSyAmc-CUYmaH_xmXYy5qZfZ_OzlzceNwz0A",
    authDomain: "netflix-db7c6.firebaseapp.com",
    projectId: "netflix-db7c6",
    storageBucket: "netflix-db7c6.appspot.com",
    messagingSenderId: "161851963636",
    appId: "1:161851963636:web:72a3430b67c830e534c6a1",
    measurementId: "G-K1R2RHWWJD"
  };


  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  export default storage;