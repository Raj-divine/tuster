import { PasswordInput, TextInput } from "@mantine/core";
const LandingPageLoginModal = ({ formData, setFormData, errors }) => {
  return (
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
  );
};

export default LandingPageLoginModal;
