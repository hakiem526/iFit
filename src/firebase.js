import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyBIGrd-UhDZMJPrmvx_q0QYjBhBA5bz0ok",
    authDomain: "bt3103-test-project-750e2.firebaseapp.com",
    projectId: "bt3103-test-project-750e2",
    storageBucket: "bt3103-test-project-750e2.appspot.com",
    messagingSenderId: "424721779966",
    appId: "1:424721779966:web:0f51a977b94f58c6f269af",
    measurementId: "G-7DDRBMTV77"
  };

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;