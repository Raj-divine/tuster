import {
  Modal,
  TextInput,
  Button,
  Text,
  MultiSelect,
  Stepper,
  PasswordInput,
} from "@mantine/core";
import { useState } from "react";
import { ALL_SUBJECTS_DATA } from "../../../FakeData";
//generate an array of 50 random subjects

function PasswordRequirement({ meets, label }) {
  return (
    <Text
      color={meets ? "teal" : "red"}
      sx={{ display: "flex", alignItems: "center" }}
      mt={7}
      size="sm"
    >
      {meets ? <CheckIcon /> : <Cross1Icon />} <Box ml={10}>{label}</Box>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
];

function getStrength(password) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

const LandingPageSignUpModal = ({ opened, onClose }) => {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  console.log(active);
  return (
    <Modal
      classNames={{
        modal: "rounded-lg",
        title: "text-xl font-semibold",
      }}
      opened={opened}
      onClose={onClose}
      title="Exited to start a journey with you!"
      size="550px"
    >
      <Stepper
        color="teal"
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
      >
        {/* Step 1 */}

        <Stepper.Step
          label="Create account"
          description="let's take the first step"
        >
          <div className="flex justify-between">
            <TextInput
              placeholder="Your first name"
              label="First Name"
              required
              className="w-[45%]"
            />
            <TextInput
              placeholder="Your last name"
              label="Last Name"
              required
              className="w-[45%]"
            />
          </div>
          <div className="mt-3">
            <TextInput
              placeholder="example@example.com"
              label="email"
              required
            />
          </div>
          <div className="mt-3">
            <PasswordInput
              placeholder="Password"
              description="Strong password should include letters in lower and uppercase, at least 1 number, at least 1 special symbol"
              label="Password"
              required
            />
          </div>
          <div className="mt-3">
            <PasswordInput
              placeholder="Confirm Password"
              label="Confirm Password"
              required
            />
          </div>
        </Stepper.Step>
        {/* Step 2 */}
        <Stepper.Step
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
            />
          </div>
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>
      <div className="mt-5 flex justify-between">
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
