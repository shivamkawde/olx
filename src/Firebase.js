
import firebase from "firebase/app"
import 'firebase/firestore';
import "firebase/auth"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCbv84MqS-9bv_fV_GP7-bGtbkZ8mSW90g",
    authDomain: "olxclone-f7f12.firebaseapp.com",
    projectId: "olxclone-f7f12",
    storageBucket: "olxclone-f7f12.appspot.com",
    messagingSenderId: "77926247151",
    appId: "1:77926247151:web:fef062f09945a819b9c91a"
  };
  firebase.initializeApp(firebaseConfig);
  export const auth=firebase.auth();
  let provider=new firebase.auth.GoogleAuthProvider()
  export const firestore= firebase.firestore();
  export const signInWithGoogle=()=>auth.signInWithPopup(provider)
  export const storage=firebase.storage()
 export default firebase;