import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyC6xceyGaCb4YpWrOsbcebL0Hhd0BLNbRE',
  authDomain: 'rhine9-c06ba.firebaseapp.com',
  projectId: 'rhine9-c06ba',
  storageBucket: 'rhine9-c06ba.appspot.com',
  messagingSenderId: '417576747685',
  appId: '1:417576747685:web:20e6b81aa10ba4a387c34c',
  measurementId: 'G-3CVS0E9XKS',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
