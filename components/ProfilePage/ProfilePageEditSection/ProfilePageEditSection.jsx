import {
  Text,
  ScrollArea,
  MultiSelect,
  TextInput,
  NumberInput,
  Space,
  Button,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { useState } from "react";
import { ALL_SUBJECTS_DATA } from "../../../FakeData";

const ProfilePageEditSection = () => {
  const [user, setUser] = useLocalStorage({ key: "user-data" });
  const initialFormState = {
    email: user.email,
    address: user.address,
    phone: user.phone,
  };

  const initialErrorState = {
    email: "",
    address: "",
    phone: "",
    subjects: "",
  };
  const [formData, setFormData] = useState(initialFormState);
  const [subjects, setSubjects] = useState(user.subjects);

  const [errors, setErrors] = useState(initialErrorState);

  return (
    <div className="lg:col-span-1 xl:row-span-1 xl:col-span-1 2xl:col-span-2 rounded-lg p-8 shadow-xl border dark:border-dark-400">
      <ScrollArea style={{ height: 250 }} type="scroll">
        <Text color="dimmed" className="text-lg mb-2">
          Edit Profile
        </Text>
        <form>
          <div className="flex flex-col sm:flex-row">
            <div className="mb-6 sm:w-1/2">
              <TextInput
                value={formData.email}
                label="Email"
                placeholder="Your email"
                required
                error={errors.email}
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
              />
            </div>
            <Space w={20} />

            <div className="mb-6 sm:mb-0 sm:w-1/2">
              <TextInput
                value={formData.address}
                label="Address"
                placeholder="Your address"
                required
                error={errors.address}
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    address: e.target.value,
                  }))
                }
              />
            </div>
          </div>

          <div className="flex flex-col 2xl:flex-row">
            <div className="mb-6 2xl:w-1/2">
              <NumberInput
                hideControls
                placeholder="9985642186"
                label="Mobile Number"
                maxLength={10}
                icon={"+91"}
                required
                value={formData.phone}
                minLength={10}
                error={errors.phone}
                onChange={(val) =>
                  setFormData((prevState) => ({ ...prevState, phone: val }))
                }
              />
            </div>
            <Space w={20} />
            <div className="mb-6 sm:mb-0  2xl:w-1/2">
              <MultiSelect
                data={ALL_SUBJECTS_DATA}
                label="Choose your interests"
                placeholder="Pick all that you like"
                searchable
                nothingFound="Nothing found"
                clearable
                clearButtonLabel="Clear selection"
                maxSelectedValues={10}
                required
                limit={20}
                error={errors.subjects}
                value={subjects}
                onChange={setSubjects}
              />
            </div>
          </div>
          <div className="sm:mt-6 2xl:-translate-y-14 inline-block">
            <Button
              type="submit"
              className="bg-teal-400 hover:bg-teal-500 dark:hover:bg-teal-600"
            >
              Edit socials
            </Button>
          </div>
        </form>
      </ScrollArea>
    </div>
  );
};

export default ProfilePageEditSection;
