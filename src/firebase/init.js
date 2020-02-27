import firebase from 'firebase/app'

import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBfw7qnOxHxT36xfg-KM8KXi1qkA9kAtiA",
    authDomain: "yemekhane-app-1f190.firebaseapp.com",
    databaseURL: "https://yemekhane-app-1f190.firebaseio.com",
    projectId: "yemekhane-app-1f190",
    storageBucket: "yemekhane-app-1f190.appspot.com",
    messagingSenderId: "1016471751034",
    appId: "1:1016471751034:web:df4be82b2fecce197aeec3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();