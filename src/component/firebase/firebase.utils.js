// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBsJey1w1TV-LsE3JsawGHTLi4uf0gpCI",
  authDomain: "clothing-store1.firebaseapp.com",
  projectId: "clothing-store1",
  storageBucket: "clothing-store1.appspot.com",
  messagingSenderId: "162256346330",
  appId: "1:162256346330:web:4277e02bf56744f1d059e3",
  measurementId: "G-NFBL1KVY5B"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth()
export const firestore=firebase.firestore()

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;