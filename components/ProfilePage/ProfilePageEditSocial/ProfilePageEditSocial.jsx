import { TextInput, Button, Space, ScrollArea, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { useLocalStorage } from "@mantine/hooks";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
const ProfilePageEditSocial = ({ user, getUser }) => {
  const [_, setUser] = useLocalStorage({ key: "user-data" });

  const [socials, setSocials] = useState({
    instagram: "",
    twitter: "",
    linkedin: "",
    facebook: "",
  });

  useEffect(() => {
    setSocials({
      instagram: user.socials.instagram || "",
      twitter: user.socials.twitter || "",
      linkedin: user.socials.linkedin || "",
      facebook: user.socials.facebook || "",
    });
  }, [user]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, { socials }, { merge: true });
    setUser((prevUser) => ({ ...prevUser, socials }));
    getUser();
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
                value={socials.instagram}
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
                value={socials.twitter}
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
                value={socials.linkedin}
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
                value={socials.facebook}
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
            <Button type="submit" className="button-primary">
              Edit socials
            </Button>
          </div>
        </form>
      </ScrollArea>
    </div>
  );
};

export default ProfilePageEditSocial;
