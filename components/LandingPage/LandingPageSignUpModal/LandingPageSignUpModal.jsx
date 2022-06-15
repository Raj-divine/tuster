import { Modal, Button, Text, Stepper } from "@mantine/core";
import { useEffect, useState } from "react";
import LandingPageSignUpModalSectionOne from "./LandingPageSignUpModalSectionOne/LandingPageSignUpModalSectionOne";
import LandingPageSignUpModalSectionTwo from "./LandingPageSignUpModalSectionTwo/LandingPageSignUpModalSectionTwo";

const LandingPageSignUpModal = ({ opened, onClose }) => {
  const [active, setActive] = useState(1);
  const [subjects, setSubjects] = useState([]);

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

  const [errors, setErrors] = useState(initialErrorState);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
  });

  const nextStep = () => {
    //checking validation
    if (active === 0) {
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
        setActive((current) => (current < 2 ? current + 1 : current));
      }
    }
    if (active === 1) {
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
        setActive((current) => (current < 2 ? current + 1 : current));
      }
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
        console.log(data);
        setFormData((prev) => ({
          ...prev,
          address: data.results[0].formatted,
        }));
      });
    }
  };

  return (
    <Modal
      classNames={{
        modal: "rounded-lg",
        title: "text-xl font-semibold",
      }}
      opened={opened}
      onClose={onClose}
      title="Exited to start a journey with you!"
      size="md"
    >
      <form onSubmit={(e) => e.preventDefault()}>
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
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>

        <div className="mt-5 flex justify-between items-center">
          {active < 1 && (
            <Text className="hover:underline underline-offset-1 cursor-pointer">
              have an account? Login
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
            type={active === 2 ? "submit" : "button"}
            className="bg-teal-500 hover:bg-teal-600 font-light text-lg tracking-wider dark:text-teal-100"
          >
            {active === 2 ? "Register" : "Next"}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default LandingPageSignUpModal;
