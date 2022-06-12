import { AppShell, Footer, useMantineColorScheme } from "@mantine/core";
import AppHeader from "../components/AppHeader/AppHeader";
import LandingPageHeader from "../components/LandingPage/LandingPageHeader/LandingPageHeader";
import LandingPageFeatureSection from "../components/LandingPage/LandingPageFeatureSection/LandingPageFeatureSection";
import LandingPageTestimonialSection from "../components/LandingPage/LandingPageTestimonialSection/LandingPageTestimonialSection";
import Head from "next/head";
import LandingPageStatsSection from "../components/LandingPage/LandingPageStatsSection/LandingPageStatsSection";
export default function LandingPage() {
  const { colorScheme } = useMantineColorScheme({
    key: "mantine-color-scheme",
  });

  return (
    <>
      <Head>
        <title>Tuster</title>
      </Head>
      <AppShell header={<AppHeader />}>
        <div className={colorScheme === "dark" ? "dark" : ""}>
          <LandingPageHeader />
          <LandingPageFeatureSection />
          <LandingPageTestimonialSection />
          <LandingPageStatsSection />
        </div>
      </AppShell>
    </>
  );
}
