import Firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyDWkh64Yynh9FgbVvek2x4ydw_PNkTIjIQ",
    authDomain: "sistemadefinancas-da081.firebaseapp.com",
    projectId: "sistemadefinancas-da081",
    storageBucket: "sistemadefinancas-da081.appspot.com",
    messagingSenderId: "956650451591",
    appId: "1:956650451591:web:8497fbf13ef7d73f3e7e22",
    measurementId: "G-LJ23HLS8SH"
  };

if(!Firebase.apps.length){
    Firebase.initializeApp(firebaseConfig);
}

export default Firebase;