import { MultiSelect, TextInput, NumberInput } from "@mantine/core";
import { ALL_SUBJECTS_DATA } from "../../../../FakeData";

const LandingPageSignUpModalSectionTwo = ({
  formData,
  setFormData,
  errors,
  subjects,
  addressFocusHandler,
  setSubjects,
}) => {
  return (
    <>
      <div className="mt-3">
        <MultiSelect
          data={ALL_SUBJECTS_DATA}
          label="Choose your interests"
          placeholder="Pick all that you like"
          searchable
          nothingFound="Nothing found"
          clearButtonLabel="Clear selection"
          clearable
          maxSelectedValues={10}
          required
          description="Search for more subjects"
          limit={20}
          value={subjects}
          onChange={setSubjects}
          error={errors.subjects}
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
          onFocus={addressFocusHandler}
          error={errors.address}
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
          error={errors.phone}
        />
      </div>
    </>
  );
};

export default LandingPageSignUpModalSectionTwo;
