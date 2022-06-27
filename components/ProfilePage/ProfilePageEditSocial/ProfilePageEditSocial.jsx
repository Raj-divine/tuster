import { TextInput, Button } from "@mantine/core";
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
    <div className="col-span-2 p-8 row-span-1 rounded-lg border dark:border-dark-400">
      <form
        onSubmit={submitHandler}
        className="grid grid-cols-2 grid-row-3 gap-6"
      >
        <div className="col-span-1 row-span-2">
          <div className="mb-6">
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
          <div>
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
        <div className="col-span-1 row-span-2">
          <div className="mb-6">
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
          <div>
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
        <div className="row-span-1 col-start-2 flex justify-end mt-8">
          <Button
            type="submit"
            className="bg-teal-400 hover:bg-teal-500 dark:hover:bg-teal-600"
          >
            Add socials
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePageEditSocial;
