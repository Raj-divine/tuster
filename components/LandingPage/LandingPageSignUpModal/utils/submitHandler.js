import { app, db } from "../../../../firebase/firebaseConfig";
import { showNotification } from "@mantine/notifications";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const submitHandler = async ({
  errors,
  router,
  formData,
  coords,
  isLoggingIn,
  setFormData,
  setErrors,
  setIsLoggingIn,
  closeModal,
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

        await setDoc(doc(db, "users", user.uid), {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          hashedPassword: user.reloadUserInfo.passwordHash,
          subjects: formData.subjects,
          address: formData.address,
          phone: formData.phone,
          coords: {
            latitude: coords.latitude,
            longitude: coords.longitude,
          },
        });
        showNotification({
          autoClose: 3000,
          title: "Sign Up Successful",
          message: "You have successfully signed up!",
          color: "teal",
        });
      }
      if (isLoggingIn) {
        await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
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
    console.log(error.code);
  }
};

export default submitHandler;
