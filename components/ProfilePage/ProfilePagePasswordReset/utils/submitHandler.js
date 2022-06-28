import { showNotification } from "@mantine/notifications";
import {
  getAuth,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";

const submitHandler = async (setErrors, formData, errors, user) => {
  //checking validation
  if (formData.oldPassword.trim() === "")
    setErrors({ oldPassword: "Old password is required" });
  else if (formData.oldPassword.trim().length < 6)
    setErrors({ oldPassword: " Old password must be at least 6 characters" });
  else if (!formData.oldPassword.match(/[a-z]+/))
    setErrors({
      password: "Old password must contain at least one lowercase letter",
    });
  else if (!formData.oldPassword.match(/[0-9]+/))
    setErrors({ password: "old password must contain at least one number" });
  else if (!formData.oldPassword.match(/[A-Z]+/))
    setErrors({
      password: "Old password must contain at least one uppercase letter",
    });
  else if (!formData.oldPassword.match(/[$@#&!%^&*()]+/))
    setErrors({
      password: "Old password must contain at least one special character",
    });
  else if (formData.password.trim() === "")
    setErrors({ password: "Password is required" });
  else if (formData.password.trim().length < 6)
    setErrors({ password: "Password must be at least 6 characters" });
  else if (!formData.password.match(/[a-z]+/))
    setErrors({
      password: "Password must contain at least one lowercase letter",
    });
  else if (!formData.password.match(/[0-9]+/))
    setErrors({ password: "Password must contain at least one number" });
  else if (!formData.password.match(/[A-Z]+/))
    setErrors({
      password: "Password must contain at least one uppercase letter",
    });
  else if (!formData.password.match(/[$@#&!%^&*()]+/))
    setErrors({
      password: "Password must contain at least one special character",
    });
  else if (formData.confirmPassword.trim() === "")
    setErrors({ confirmPassword: "Confirm password is required" });
  else if (formData.confirmPassword !== formData.password)
    setErrors({ confirmPassword: "Passwords must match" });
  else setErrors({ password: "", confirmPassword: "" });

  if (!errors.password && !errors.confirmPassword) {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      const credential = EmailAuthProvider.credential(
        user.email,
        formData.oldPassword
      );
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, formData.password);

      showNotification({
        autoClose: 3000,
        title: "Password Changed",
        message: "Your password has changed successfully",
        color: "teal",
      });
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        setErrors({ oldPassword: "Please provide correct Password" });
      }
    }
  }
};

export default submitHandler;
