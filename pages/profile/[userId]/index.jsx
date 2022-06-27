import { AppShell, useMantineColorScheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import AppNavbar from "../../../components/AppNavbar/AppNavbar";
import AppHeader from "../../../components/AppHeader/AppHeader";
import AppLoader from "../../../components/AppLoader/AppLoader";
import { onAuthStateChanged } from "firebase/auth";
import Head from "next/head";
import ProfilePageMainProfile from "../../../components/ProfilePage/ProfilePageMainProfile/ProfilePageMainProfile";
import ProfilePageSocial from "../../../components/ProfilePage/ProfilePageSocial/ProfilePageSocial";

const ProfilePage = () => {
  const { colorScheme } = useMantineColorScheme();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const auth = getAuth();
  const router = useRouter();
  const [user] = useLocalStorage({ key: "user-data" });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace("/");
      } else {
        setUserLoggedIn(true);
      }
    });
  }, [auth]);

  return (
    <>
      <Head>
        <title>
          {user.firstName} {user.lastName} | Profile
        </title>
      </Head>
      {userLoggedIn && (
        <AppShell
          padding={0}
          navbarOffsetBreakpoint="md"
          fixed
          header={<AppHeader />}
          navbar={<AppNavbar />}
        >
          <div
            className={`${
              colorScheme === "dark" ? "dark" : ""
            } w-4/5 my-0 mx-auto h-full grid grid-cols-3 grid-rows-3 gap-x-3`}
          >
            <ProfilePageMainProfile />
            <ProfilePageSocial />
          </div>
        </AppShell>
      )}
      {!userLoggedIn && <AppLoader />}
    </>
  );
};

export default ProfilePage;
