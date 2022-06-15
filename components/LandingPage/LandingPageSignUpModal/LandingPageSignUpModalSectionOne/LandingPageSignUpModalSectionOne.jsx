import { Stepper, TextInput, PasswordInput } from "@mantine/core";
const LandingPageSignUpModalSectionOne = ({
  setFormData,
  formData,
  errors,
}) => {
  return (
    <>
      <div className="flex justify-between">
        <TextInput
          placeholder="Your first name"
          label="First Name"
          required
          minLength={3}
          value={formData.firstName}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              firstName: e.target.value,
            }))
          }
          error={errors.firstName}
          className="max-w-[45%]"
        />
        <TextInput
          placeholder="Your last name"
          label="Last Name"
          value={formData.lastName}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, lastName: e.target.value }))
          }
          required
          minLength={3}
          error={errors.lastName}
          className="max-w-[45%]"
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
          error={errors.email}
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
          error={errors.password}
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
          error={errors.confirmPassword}
        />
      </div>
    </>
  );
};

export default LandingPageSignUpModalSectionOne;
