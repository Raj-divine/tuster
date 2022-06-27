//utils
import nextStep from "./utils/nextStep";
import submitHandler from "./utils/submitHandler";
import addressFocusHandler from "./utils/addressFocusHandler";

import { Modal, Button, Text, Stepper } from "@mantine/core";

import { useLocalStorage } from "@mantine/hooks";

import { useRouter } from "next/router";

import { useEffect, useState } from "react";

import LandingPageSignUpModalSectionOne from "./LandingPageSignUpModalSectionOne/LandingPageSignUpModalSectionOne";
import LandingPageSignUpModalSectionTwo from "./LandingPageSignUpModalSectionTwo/LandingPageSignUpModalSectionTwo";
import LandingPageLoginModal from "./LandingPageLoginModal/LandingPageLoginModal";

const LandingPageSignUpModal = ({ opened, closeModal, openWithLogin }) => {
  const [active, setActive] = useState(0);
  const [subjects, setSubjects] = useState([]);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const router = useRouter();

  const [user, setUser] = useLocalStorage({ key: "user-data" });
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

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  useEffect(() => {
    setFormData((prev) => ({ ...prev, subjects }));
  }, [subjects]);

  const loginToggleHandler = () => {
    setIsLoggingIn((prev) => !prev);
    setFormData(initialFormState);
    setErrors(initialErrorState);
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler({
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
          });
        }}
      >
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
                addressFocusHandler={addressFocusHandler.bind(
                  this,
                  setFormData
                )}
              />
            </Stepper.Step>
          </Stepper>
        )}
        {isLoggingIn && (
          <LandingPageLoginModal
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />
        )}

        <div className="mt-5 flex justify-between items-center">
          {active < 1 && (
            <Text
              onClick={loginToggleHandler}
              className="hover:underline underline-offset-1 sm:text-base cursor-pointer text-xs w-1/2"
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
            onClick={nextStep.bind(this, {
              setErrors,
              formData,
              active,
              isLoggingIn,
              setActive,
              initialErrorState,
            })}
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
