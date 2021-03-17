import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCjrrYfovldlzx15YzLBDvYe-Dwyv3jXlg',
  authDomain: 'clone-be987.firebaseapp.com',
  projectId: 'clone-be987',
  storageBucket: 'clone-be987.appspot.com',
  messagingSenderId: '166308120819',
  appId: '1:166308120819:web:2d58ebb571891d80b04f86',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
