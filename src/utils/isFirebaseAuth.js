import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../config/firebaseConfig";


const auth = getAuth(app);

const isFirebaseAuth = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          return user
          // ...
        } else {
          // User is signed out
          // ...
          return false
        }
      });
}

export default isFirebaseAuth