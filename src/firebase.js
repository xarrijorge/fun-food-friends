import firebase from 'firebase';

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

export default firebase;
