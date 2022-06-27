import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebase/firebaseConfig";
const getUserData = async () => {
  const { currentUser } = getAuth();

  const userRef = doc(db, "users", currentUser.uid);

  const user = await getDoc(userRef);
  return { ...user.data(), uid: currentUser.uid };
};

export default getUserData;
