import { useState, useEffect } from "react";
import { AppShell, Divider, useMantineColorScheme } from "@mantine/core";
import Head from "next/head";
import AppHeader from "../components/AppHeader/AppHeader";
import AppNavbar from "../components/AppNavbar/AppNavbar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import HomePageHeader from "../components/HomePage/HomePageHeader/HomePageHeader";
import AppLoader from "../components/AppLoader/AppLoader";
import HomePageInterestSection from "../components/HomePage/HomePageInterestSection/HomePageInterestSection";
import HomePageNewSubSection from "../components/HomePage/HomePageNewSubSection/HomePageNewSubSection";

const Home = () => {
  const { colorScheme } = useMantineColorScheme();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const router = useRouter();
  const auth = getAuth();

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
        <title>Home | Tuster</title>
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
            className={
              colorScheme === "dark" ? "dark w-full h-full" : "w-full h-full"
            }
          >
            <HomePageHeader />
            <Divider my="sm" className="p-0 m-0" />
            <HomePageInterestSection />
            <HomePageNewSubSection />
          </div>
        </AppShell>
      )}
      {!userLoggedIn && <AppLoader />}
    </>
  );
};

export default Home;
