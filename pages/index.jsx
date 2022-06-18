import { AppShell, useMantineColorScheme } from "@mantine/core";
import AppHeader from "../components/AppHeader/AppHeader";
import LandingPageHeader from "../components/LandingPage/LandingPageHeader/LandingPageHeader";
import LandingPageFeatureSection from "../components/LandingPage/LandingPageFeatureSection/LandingPageFeatureSection";
import LandingPageTestimonialSection from "../components/LandingPage/LandingPageTestimonialSection/LandingPageTestimonialSection";
import Head from "next/head";
import LandingPageStatsSection from "../components/LandingPage/LandingPageStatsSection/LandingPageStatsSection";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import AppLoader from "../components/AppLoader/AppLoader";

export default function LandingPage() {
  const { colorScheme } = useMantineColorScheme();
  const router = useRouter();
  const auth = getAuth();
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
    signOut(auth)
      .then((res) => {})
      .catch((err) => console.log(err));
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
