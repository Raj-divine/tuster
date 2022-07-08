import { db } from "../../../../firebase/firebaseConfig";
import { showNotification } from "@mantine/notifications";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

const submitHandler = async ({
  errors,
  router,
  formData,
  isLoggingIn,
  setFormData,
  setErrors,
  setIsLoggingIn,
  closeModal,
  setUser,
  setActive,
}) => {
  try {
    if (
      !errors.firstName &&
      !errors.lastName &&
      !errors.email &&
      !errors.password &&
      !errors.confirmPassword &&
      !errors.subjects &&
      !errors.address &&
      !errors.phone
    ) {
      const auth = getAuth();
      if (!isLoggingIn) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        const user = userCredential.user;

        const userDoc = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          subjects: formData.subjects,
          address: formData.address,
          phone: formData.phone,
          socials: {},
          bookings: [],
        };

        await setDoc(doc(db, "users", user.uid), userDoc);
        setUser({ ...userDoc, uid: user.uid });
        showNotification({
          autoClose: 3000,
          title: "Sign Up Successful",
          message: "You have successfully signed up!",
          color: "teal",
        });
      }
      if (isLoggingIn) {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );

        const user = userCredential.user;

        const docSnap = await getDoc(doc(db, "users", user.uid));
        setUser({ ...docSnap.data(), uid: user.uid });

        showNotification({
          autoClose: 3000,
          title: "Sign In Successful",
          message: "happy to see you again!",
          color: "teal",
        });
      }

      setFormData(initialFormState);
      setErrors(initialErrorState);
      setIsLoggingIn(false);
      closeModal();
      router.replace("/home");
    }
  } catch (error) {
    if (
      error.code === "auth/user-not-found" ||
      error.code === "auth/wrong-password"
    ) {
      setErrors({
        email: "Wrong Email or Password",
        password: "Wrong Email or Password",
      });
    }
    if (error.code === "auth/email-already-in-use") {
      setErrors({
        email: "Email already in use",
      });
      setActive(0);
    }
    if (error.code === "auth/invalid-email") {
      setErrors({
        email: "Invalid Email",
      });
      setActive(0);
    }
  }
};

export default submitHandler;
