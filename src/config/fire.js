import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCoqHQ7srDDRzGa60E067fC5McWyhxY3wg",
  authDomain: "application-61989.firebaseapp.com",
  databaseURL: "https://application-61989.firebaseio.com",
  projectId: "application-61989",
  storageBucket: "application-61989.appspot.com",
  messagingSenderId: "224241460482",
  appId: "1:224241460482:web:5866db831bd258c87a8e1b"
};
const fire = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { fire, storage }