import { AppShell, useMantineColorScheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import AppNavbar from "../../components/AppNavbar/AppNavbar";
import AppHeader from "../../components/AppHeader/AppHeader";
import AppLoader from "../../components/AppLoader/AppLoader";
import { onAuthStateChanged } from "firebase/auth";
import Head from "next/head";
import ProfilePageMainProfile from "../../components/ProfilePage/ProfilePageMainProfile/ProfilePageMainProfile";
import ProfilePageSocial from "../../components/ProfilePage/ProfilePageSocial/ProfilePageSocial";
import ProfilePageEditSocial from "../../components/ProfilePage/ProfilePageEditSocial/ProfilePageEditSocial";
import ProfilePageEditSection from "../../components/ProfilePage/ProfilePageEditSection/ProfilePageEditSection";
import ProfilePagePasswordReset from "../../components/ProfilePage/ProfilePagePasswordReset/ProfilePagePasswordResetPage";

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
          {user.firstName} {user.lastName}
        </title>
      </Head>
      {userLoggedIn && (
        <AppShell
          navbarOffsetBreakpoint="md"
          fixed
          header={<AppHeader />}
          navbar={<AppNavbar />}
        >
          <div
            className={`${
              colorScheme === "dark" ? "dark" : ""
            } sm:w-4/5 md:w-2/3 lg:w-3/4 xl:w-11/12 my-0 mx-auto h-full grid xl:grid-cols-2 lg:gird-cols-1 lg:grid-rows-8 xl:grid-rows-3 2xl:grid-cols-3 gap-3`}
          >
            <ProfilePageMainProfile />
            <ProfilePageSocial />
            <ProfilePageEditSocial />
            <ProfilePageEditSection />
            <ProfilePagePasswordReset />
          </div>
        </AppShell>
      )}
      {!userLoggedIn && <AppLoader />}
    </>
  );
};

export default ProfilePage;
