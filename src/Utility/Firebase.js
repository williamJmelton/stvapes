import firebase from "firebase";

  var config = {
    apiKey: "AIzaSyCsNopgmtOTf4K_CI6_tM0Din7Dn_7M0wg",
    authDomain: "shadetreevapes-864b8.firebaseapp.com",
    databaseURL: "https://shadetreevapes-864b8.firebaseio.com",
    projectId: "shadetreevapes-864b8",
    storageBucket: "shadetreevapes-864b8.appspot.com",
    messagingSenderId: "745284184901"
  };
  firebase.initializeApp(config);

  var db = firebase.firestore();

  db.settings({
    timestampsInSnapshots: true
  });

  export default db;