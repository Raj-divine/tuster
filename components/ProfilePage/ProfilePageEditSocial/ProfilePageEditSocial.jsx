import { TextInput, Button, Space, ScrollArea, Text } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { showNotification } from "@mantine/notifications";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
const ProfilePageEditSocial = () => {
  const [user, setUser] = useLocalStorage({ key: "user-data" });
  const [socials, setSocials] = useState({
    instagram: user.socials.instagram || "",
    twitter: user.socials.twitter || "",
    linkedin: user.socials.linkedin || "",
    facebook: user.socials.facebook || "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const { instagram, twitter, linkedin, facebook } = socials;
    if (!instagram && !twitter && !linkedin && !facebook) {
      showNotification({
        autoClose: 3000,
        title: "No data provided",
        message: "Please provide at least one handle before submitting",
        color: "red",
      });
      return;
    }
    const userRef = doc(db, "users", user.uid);
    setDoc(userRef, { socials }, { merge: true });
    setUser((prevUser) => ({ ...prevUser, socials }));
  };

  return (
    <div className="lg:col-span-1 lg:row-span-1 xl:col-span-1 xl:row-span-1 xl:col-start-2 2xl:col-span-2 2xl:row-span-1 p-8 rounded-lg shadow-xl border dark:border-dark-400">
      <ScrollArea style={{ height: 250 }} type="scroll">
        <Text color="dimmed" className="text-lg mb-2">
          Add/Edit your socials
        </Text>
        <form onSubmit={submitHandler}>
          <div className="flex flex-col sm:flex-row">
            <div className="mb-6 sm:w-1/2">
              <TextInput
                value={user.socials.instagram && socials.instagram}
                placeholder="Add Instagram Handle"
                label="Instagram handle"
                onChange={(e) =>
                  setSocials((prevSocial) => {
                    return {
                      ...prevSocial,
                      instagram: e.target.value,
                    };
                  })
                }
              />
            </div>
            <Space w={20} />

            <div className="mb-6 sm:mb-0 sm:w-1/2">
              <TextInput
                value={user.socials.instagram && socials.twitter}
                placeholder="Add Twitter Handle"
                label="twitter handle"
                onChange={(e) =>
                  setSocials((prevSocial) => {
                    return {
                      ...prevSocial,
                      twitter: e.target.value,
                    };
                  })
                }
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row">
            <div className="mb-6 sm:w-1/2">
              <TextInput
                value={user.socials.instagram && socials.linkedin}
                placeholder="Add LinkedIn Handle"
                label="linkedin handle"
                onChange={(e) =>
                  setSocials((prevSocial) => {
                    return {
                      ...prevSocial,
                      linkedin: e.target.value,
                    };
                  })
                }
              />
            </div>
            <Space w={20} />
            <div className="mb-6 sm:mb-0  sm:w-1/2">
              <TextInput
                value={user.socials.instagram && socials.facebook}
                placeholder="Add Facebook Handle"
                label="facebook handle"
                onChange={(e) =>
                  setSocials((prevSocial) => {
                    return {
                      ...prevSocial,
                      facebook: e.target.value,
                    };
                  })
                }
              />
            </div>
          </div>
          <div className="col-start-2 flex justify-end ">
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

export default ProfilePageEditSocial;
