import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCtJehoCB7QSbwX85x-OyUcOSBAfTISivs",
    authDomain: "vuedel-56616.firebaseapp.com",
    databaseURL: "https://vuedel-56616.firebaseio.com",
    projectId: "vuedel-56616",
    storageBucket: "vuedel-56616.appspot.com",
    messagingSenderId: "434577888210"
  };
  firebase.initializeApp(config);
  const storage =  firebase.storage()
  const database = firebase.database()
  
  export {
    database,
    storage
  }