import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebase/firebaseConfig";
const getUserData = async () => {
  const { currentUser } = getAuth();

  const userRef = doc(db, "users", currentUser.uid);

  return getDoc(userRef);
};

export default getUserData;
