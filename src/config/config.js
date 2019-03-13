import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDMUTkQjwjVizyk8QbLsLSBixcG06zxJYw",
  authDomain: "classification-8561e.firebaseapp.com",
  databaseURL: "https://classification-8561e.firebaseio.com",
  projectId: "classification-8561e",
  storageBucket: "classification-8561e.appspot.com",
  messagingSenderId: "793046482924"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage().ref();
export default storage;
