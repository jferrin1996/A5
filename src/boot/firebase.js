import firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

// ADD YOUR FIREBASE CONFIG OBJECT HERE:
var firebaseConfig = {
  apiKey: "AIzaSyAS8DUKYfRQnG8Sp3d2uhg5DVT002xqt78",
  authDomain: "maverick-d45ac.firebaseapp.com",
  databaseURL: "https://maverick-d45ac-default-rtdb.firebaseio.com",
  projectId: "maverick-d45ac",
  storageBucket: "maverick-d45ac.appspot.com",
  messagingSenderId: "832161937721",
  appId: "1:832161937721:web:367fa6e35d4c2b090d50e8"
}

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }
