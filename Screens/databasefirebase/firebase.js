import firebase from 'firebase'

import 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyBQxclsyE0Td7qshQ3LMOK5n50uIxqsPW4",  
    authDomain: "libreta-contactos-eb239.firebaseapp.com",  
    projectId: "libreta-contactos-eb239",  
    storageBucket: "libreta-contactos-eb239.appspot.com",  
    messagingSenderId: "1097240857310",  
    appId: "1:1097240857310:web:f434a7a8e41dac13d9904f"
  
  };
    
  // Initialize Firebase  
  const app = initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export default{
      firebase,
      db
  }

