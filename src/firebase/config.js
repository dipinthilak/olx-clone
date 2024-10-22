import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';



const firebaseConfig = {
  apiKey: "AIzaSyDrOXMQJMAnWsCda9DTEUEuNhBbtGNl8Dc",
  authDomain: "fir-5099e.firebaseapp.com",
  projectId: "fir-5099e",
  storageBucket: "fir-5099e.appspot.com",
  messagingSenderId: "387229559636",
  appId: "1:387229559636:web:c52c9d3cffa788ccf5b6c1",
  measurementId: "G-0KL00S4JL9"
};


export default firebase.initializeApp(firebaseConfig) 