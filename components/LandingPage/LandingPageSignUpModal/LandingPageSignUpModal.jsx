import {
  Modal,
  Button,
  Text,
  Stepper,
  TextInput,
  PasswordInput,
} from "@mantine/core";
import { useEffect, useState } from "react";
import LandingPageSignUpModalSectionOne from "./LandingPageSignUpModalSectionOne/LandingPageSignUpModalSectionOne";
import LandingPageSignUpModalSectionTwo from "./LandingPageSignUpModalSectionTwo/LandingPageSignUpModalSectionTwo";
import { app, db } from "../../../firebase/firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
const LandingPageSignUpModal = ({ opened, closeModal, openWithLogin }) => {
  const [active, setActive] = useState(0);
  const [subjects, setSubjects] = useState([]);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    setIsLoggingIn(openWithLogin);
  }, [openWithLogin]);

  const initialErrorState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    subjects: "",
  };

  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
  };

  const [errors, setErrors] = useState(initialErrorState);

  const [formData, setFormData] = useState(initialFormState);

  const nextStep = () => {
    //checking validation
    if (active === 0 && !isLoggingIn) {
      if (formData.firstName.trim() === "")
        setErrors({ firstName: "First name is required" });
      else if (formData.firstName.trim().length < 3)
        setErrors({ firstName: "First name must be at least 3 characters" });
      else if (formData.lastName.trim() === "")
        setErrors({ lastName: "Last name is required" });
      else if (formData.lastName.trim().length < 3)
        setErrors({ lastName: "Last name must be at least 3 characters" });
      else if (formData.email.trim() === "")
        setErrors({ email: "Email is required" });
      else if (!formData.email.includes("@") || !formData.email.includes("."))
        setErrors({ email: "Please enter a valid email" });
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
      else {
        setErrors(initialErrorState);
        setActive((current) => (current < 1 ? current + 1 : current));
      }
    }
    if (active === 1 && !isLoggingIn) {
      if (formData.subjects.length < 3)
        setErrors({ subjects: "Please select at least 3 subject" });
      else if (formData.address.trim() === "")
        setErrors({ address: "Please enter your address" });
      else if (formData.phone === undefined)
        setErrors({ phone: "Please enter your phone number" });
      else if (formData.phone.toString().length < 10)
        setErrors({ phone: "Please enter a valid phone number" });
      else if (formData.phone.toString().length > 10)
        setErrors({ phone: "Please enter a valid phone number" });
      else {
        setErrors(initialErrorState);
        setActive((current) => (current < 1 ? current + 1 : current));
      }
    }
    //checking validation when logging in
    if (isLoggingIn) {
      if (formData.email.trim() === "")
        setErrors({ email: "Email is required" });
      else if (!formData.email.includes("@") || !formData.email.includes("."))
        setErrors({ email: "Please enter a valid email" });
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
      else setErrors(initialErrorState);
    }
  };
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  useEffect(() => {
    setFormData((prev) => ({ ...prev, subjects }));
  }, [subjects]);

  const addressFocusHandler = () => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(async (location) => {
        const { latitude, longitude } = location.coords;
        const response = await fetch(
          `api/get-user-location?q=${latitude}+${longitude}`
        );
        const data = await response.json();
        setFormData((prev) => ({
          ...prev,
          address: data.results[0].formatted,
        }));
      });
    }
  };

  const loginToggleHandler = () => {
    setIsLoggingIn((prev) => !prev);
    setFormData(initialFormState);
    setErrors(initialErrorState);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
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
          });
        }
        if (isLoggingIn) {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
          );
          const user = userCredential.user;
        }

        setFormData(initialFormState);
        setErrors(initialErrorState);
        setIsLoggingIn(false);
        closeModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      classNames={{
        modal: "rounded-lg",
        title: "text-xl font-semibold",
      }}
      opened={opened}
      onClose={closeModal}
      title={
        isLoggingIn
          ? "Exited to see you again!"
          : "Exited to start a journey with you!"
      }
      size="md"
    >
      <form onSubmit={submitHandler}>
        {!isLoggingIn && (
          <Stepper
            size="sm"
            color="teal"
            active={active}
            onStepClick={setActive}
            breakpoint="sm"
          >
            {/* Step 1 */}
            <Stepper.Step
              allowStepSelect={false}
              label="Create account"
              description="let's take the first step"
            >
              <LandingPageSignUpModalSectionOne
                setFormData={setFormData}
                formData={formData}
                errors={errors}
              />
            </Stepper.Step>
            {/* Step 2 */}
            <Stepper.Step
              allowStepSelect={false}
              label="Additional Information"
              description="Tell us more about you"
            >
              <LandingPageSignUpModalSectionTwo
                subjects={subjects}
                setSubjects={setSubjects}
                formData={formData}
                setFormData={setFormData}
                errors={errors}
                addressFocusHandler={addressFocusHandler}
              />
            </Stepper.Step>
          </Stepper>
        )}
        {isLoggingIn && (
          <>
            <div className="mt-3">
              <TextInput
                placeholder="example@example.com"
                label="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                error={errors.email}
              />
            </div>
            <div className="mt-3">
              <PasswordInput
                placeholder="Password"
                label="Password"
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, password: e.target.value }))
                }
                error={errors.password}
              />
            </div>
          </>
        )}

        <div className="mt-5 flex justify-between items-center">
          {active < 1 && (
            <Text
              onClick={loginToggleHandler}
              className="hover:underline underline-offset-1 cursor-pointer"
            >
              {!isLoggingIn
                ? "have an account? Login"
                : "don't have an account? Sign up"}
            </Text>
          )}

          {active > 0 && (
            <Button
              onClick={prevStep}
              variant="outline"
              className="text-teal-400 border-teal-400"
            >
              Back
            </Button>
          )}
          <Button
            onClick={nextStep}
            type={active === 1 || isLoggingIn ? "submit" : "button"}
            className="bg-teal-500 hover:bg-teal-600 font-light text-lg tracking-wider dark:text-teal-100"
          >
            {active === 1 ? "Register" : isLoggingIn ? "Login" : "Next"}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default LandingPageSignUpModal;
