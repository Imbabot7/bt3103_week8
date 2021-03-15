import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD2cLHsM5l80TjuAg2F832aeX5Jwk9bFV0",
    authDomain: "bt3103-week-6-2f436.firebaseapp.com",
    projectId: "bt3103-week-6-2f436",
    storageBucket: "bt3103-week-6-2f436.appspot.com",
    messagingSenderId: "209386049965",
    appId: "1:209386049965:web:3e31aa5b58438177219124",
    measurementId: "G-KD4LWZSR0W"
  };

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;
  