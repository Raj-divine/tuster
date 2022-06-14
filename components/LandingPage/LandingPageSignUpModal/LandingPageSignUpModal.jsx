import {
  Modal,
  TextInput,
  Button,
  Text,
  MultiSelect,
  Stepper,
  PasswordInput,
  NumberInput,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { ALL_SUBJECTS_DATA } from "../../../FakeData";

const LandingPageSignUpModal = ({ opened, onClose }) => {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const [subjects, setSubjects] = useState([]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, subjects }));
  }, [subjects]);

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
          <div className="flex justify-between">
            <TextInput
              placeholder="Your first name"
              label="First Name"
              required
              value={formData.firstName}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, firstName: e.target.value }))
              }
            />
            <TextInput
              placeholder="Your last name"
              label="Last Name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, lastName: e.target.value }))
              }
            />
          </div>
          <div className="mt-3">
            <TextInput
              placeholder="example@example.com"
              label="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <div className="mt-3">
            <PasswordInput
              placeholder="Password"
              description="Strong password should include letters in lower and uppercase, at least 1 number, at least 1 special symbol"
              label="Password"
              required
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>
          <div className="mt-3">
            <PasswordInput
              placeholder="Confirm Password"
              label="Confirm Password"
              required
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                }))
              }
            />
          </div>
        </Stepper.Step>
        {/* Step 2 */}
        <Stepper.Step
          allowStepSelect={false}
          label="Additional Information"
          description="Tell us more about you"
        >
          <div className="mt-3">
            <MultiSelect
              data={ALL_SUBJECTS_DATA}
              label="Choose your interests"
              placeholder="Pick all that you like"
              searchable
              nothingFound="Nothing found"
              clearButtonLabel="Clear selection"
              clearable
              maxSelectedValues={15}
              required
              description="Search for more subjects"
              limit={20}
              value={subjects}
              onChange={setSubjects}
            />
          </div>
          <div className="mt-3">
            <TextInput
              description="please fill your correct address"
              placeholder="Your address"
              label="Address"
              required
              value={formData.address}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, address: e.target.value }))
              }
            />
          </div>
          <div className="mt-3">
            <NumberInput
              hideControls
              placeholder="9985642186"
              label="Mobile Number"
              maxLength={10}
              icon={"+91"}
              required
              value={formData.phone}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, phone: value }))
              }
              minLength={10}
            />
          </div>
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
          className="bg-teal-500 hover:bg-teal-600 font-light text-lg tracking-wider dark:text-teal-100"
        >
          {active === 2 ? "Register" : "Next"}
        </Button>
      </div>
    </Modal>
  );
};

export default LandingPageSignUpModal;
