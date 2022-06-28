import { ScrollArea, Text, PasswordInput, Button } from "@mantine/core";
import { useState } from "react";
const ProfilePagePasswordReset = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  return (
    <div className="lg:col-span-1 xl:row-span-1 xl:col-span-1 2xl:col-span-1 p-8 rounded-lg border dark:border-dark-400 shadow-2xl">
      <ScrollArea style={{ height: 250 }} type="scroll">
        <Text color="dimmed" className="text-lg mb-2">
          Reset Password
        </Text>
        <form>
          <div>
            <div className="mb-6">
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
            <div>
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
            <div className="mt-6 flex justify-end">
              <Button
                type="submit"
                className="bg-teal-400 hover:bg-teal-500 dark:hover:bg-teal-600"
              >
                Change Password
              </Button>
            </div>
          </div>
        </form>
      </ScrollArea>
    </div>
  );
};

export default ProfilePagePasswordReset;
