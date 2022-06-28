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
  const initialFormData = {
    email: user.email,
    address: user.address,
    phone: user.phone,
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [subjects, setSubjects] = useState(user.subjects);
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
              />
            </div>
            <Space w={20} />

            <div className="mb-6 sm:mb-0 sm:w-1/2">
              <TextInput
                value={formData.address}
                label="Address"
                placeholder="Your address"
                required
              />
            </div>
          </div>

          <div className="flex flex-col xl:flex-row">
            <div className="mb-6 xl:w-1/2">
              <NumberInput
                hideControls
                placeholder="9985642186"
                label="Mobile Number"
                maxLength={10}
                icon={"+91"}
                required
                value={formData.phone}
                minLength={10}
              />
            </div>
            <Space w={20} />
            <div className="mb-6 sm:mb-0  xl:w-1/2">
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
                limit={20}
                value={subjects}
                onChange={setSubjects}
              />
            </div>
          </div>
          <div className="col-start-2 flex justify-end sm:mt-6">
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
