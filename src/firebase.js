import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';




  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAV6LB0kAFalMcco1tLvCuPEfOuzZ_sUuc",
    authDomain: "m-city-df233.firebaseapp.com",
    databaseURL: "https://m-city-df233.firebaseio.com",
    projectId: "m-city-df233",
    storageBucket: "m-city-df233.appspot.com",
    messagingSenderId: "1097363500123"
  };
  firebase.initializeApp(config);

  //Connecting with database
  const firebaseDB = firebase.database();
  const firebaseMatches = firebaseDB.ref("matches");
  // firebaseDB.ref('matches').once('value').then((snapshot) => {
  //   console.log(snapshot.val());
  // })
  const firebasePromotions = firebaseDB.ref("promotions");
  const firebaseTeams = firebaseDB.ref("teams");
  const firebasePlayers = firebaseDB.ref('players');

  export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers,
    firebaseDB
  }