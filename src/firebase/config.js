import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

  var firebaseConfig = {
    apiKey: "AIzaSyDh6KHfe58BKe7sw6cnF5DcMtF4Ifamk50",
    authDomain: "react-imageupload-ca4f2.firebaseapp.com",
    projectId: "react-imageupload-ca4f2",
    storageBucket: "react-imageupload-ca4f2.appspot.com",
    messagingSenderId: "382084998801",
    appId: "1:382084998801:web:623591a0fd275abfc0c130",
    measurementId: "G-72G8YXHTVS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFireStore, timestamp};
