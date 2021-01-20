 import firebase from 'firebase'
 import firestore from 'firebase/firestore'

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyD57aG_zBtRL_orXVUkGROH2ZOj4_GF2fU",
    authDomain: "udemy-geo-kittens.firebaseapp.com",
    databaseURL: "https://udemy-geo-kittens.firebaseio.com",
    projectId: "udemy-geo-kittens",
    storageBucket: "udemy-geo-kittens.appspot.com",
    messagingSenderId: "464293189999",
    appId: "1:464293189999:web:51605d2a001a6a4d32b09a",
    measurementId: "G-R90LTE4WJ3"
  };
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()
firebase.analytics(); 
