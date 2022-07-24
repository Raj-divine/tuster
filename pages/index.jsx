import { AppShell, useMantineColorScheme } from "@mantine/core";
import AppHeader from "../components/AppHeader/AppHeader";
import LandingPageHeader from "../components/LandingPage/LandingPageHeader/LandingPageHeader";
import LandingPageFeatureSection from "../components/LandingPage/LandingPageFeatureSection/LandingPageFeatureSection";
import LandingPageTestimonialSection from "../components/LandingPage/LandingPageTestimonialSection/LandingPageTestimonialSection";
import Head from "next/head";
import LandingPageStatsSection from "../components/LandingPage/LandingPageStatsSection/LandingPageStatsSection";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AppLoader from "../components/AppLoader/AppLoader";
import { useLocalStorage } from "@mantine/hooks";
export default function LandingPage() {
  const { colorScheme } = useMantineColorScheme();
  const router = useRouter();
  const auth = getAuth();
  const [userData, setUserData] = useLocalStorage({ key: "user-data" });
  const [userLoggedIn, setUserLoggedIn] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace("/home");
      } else {
        setUserLoggedIn(false);
      }
    });
  }, [auth]);

  useEffect(() => {
    if (!userData) {
      setUserData({
        firstName: " ",
        lastName: " ",
        socials: {},
        bookings: [],
        bookmarks: [],
        email: "",
        notReviewed: [],
        subjects: [],
        address: "",
        phone: "",
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Tuster</title>
      </Head>
      {!userLoggedIn && (
        <AppShell header={<AppHeader hiddenBurger />}>
          <div className={colorScheme === "dark" ? "dark" : ""}>
            <LandingPageHeader />
            <LandingPageFeatureSection />
            <LandingPageTestimonialSection />
            <LandingPageStatsSection />
          </div>
        </AppShell>
      )}
      {userLoggedIn && <AppLoader />}
    </>
  );
}
