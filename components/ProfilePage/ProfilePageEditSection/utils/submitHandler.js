import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../../firebase/firebaseConfig";
import { showNotification } from "@mantine/notifications";
const submitHandler = async (
  setErrors,
  subjects,
  formData,
  setUser,
  errors,
  initialErrorState,
  user
) => {
  //checking validity

  if (formData.email.trim() === "") setErrors({ email: "Email is required" });
  else if (!formData.email.includes("@") || !formData.email.includes("."))
    setErrors({ email: "Please enter a valid email" });
  else if (formData.address.trim() === "")
    setErrors({ address: "Please enter your address" });
  else if (formData.address.trim().length < 7)
    setErrors({ address: "Please enter a valid address" });
  else if (formData.phone === undefined)
    setErrors({ phone: "Please enter your phone number" });
  else if (formData.phone.toString().length < 10)
    setErrors({ phone: "Please enter a valid phone number" });
  else if (formData.phone.toString().length > 10)
    setErrors({ phone: "Please enter a valid phone number" });
  else if (subjects.length < 3)
    setErrors({ subjects: "Please select at least 3 subject" });
  else {
    setErrors(initialErrorState);
  }

  if (!errors.email && !errors.address && !errors.phone && !errors.subjects) {
    try {
      const newUserData = {
        ...formData,
        subjects,
      };
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, newUserData, { merge: true });
      setUser((prevState) => {
        return {
          ...prevState,
          ...newUserData,
        };
      });

      showNotification({
        autoClose: 3000,
        title: "Profile Updated!",
        message: "Your profile was updated successfully",
        color: "teal",
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export default submitHandler;
