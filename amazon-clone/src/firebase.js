import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB-VxbQ9lgu31G2wPwF642C16T27dV9dhU",
  authDomain: "clone-14626.firebaseapp.com",
  projectId: "clone-14626",
  storageBucket: "clone-14626.appspot.com",
  messagingSenderId: "4371515081",
  appId: "1:4371515081:web:c3ce3cc0cc89487efd2f18",
  measurementId: "G-D73HWNXCLX"
};

const firebaseApp =  firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }