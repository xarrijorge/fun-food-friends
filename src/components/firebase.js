import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCXlX07OCFCJwZRlVkUenImTCPwzZPRGaw',
  authDomain: 'food-fun-friends-01x18.firebaseapp.com',
  databaseURL: 'https://food-fun-friends-01x18.firebaseio.com',
  projectId: 'food-fun-friends-01x18',
  storageBucket: 'food-fun-friends-01x18.appspot.com',
  messagingSenderId: '623962784213',
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
