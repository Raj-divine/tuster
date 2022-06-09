import { AppShell, useMantineColorScheme } from "@mantine/core";
import AppHeader from "../components/AppHeader/AppHeader";

import LandingPageHeader from "../components/LandingPage/LandingPageHeader/LandingPageHeader";
import Head from "next/head";
import LandingPageFeatureSection from "../components/LandingPage/LandingPageFeatureSection/LandingPageFeatureSection";
export default function Home() {
  const { colorScheme } = useMantineColorScheme({
    key: "mantine-color-scheme",
  });

  return (
    <>
      <Head>
        <title>Tuster</title>
      </Head>
      <AppShell header={<AppHeader />}>
        <LandingPageHeader colorScheme={colorScheme} />
        <LandingPageFeatureSection colorScheme={colorScheme} />
      </AppShell>
    </>
  );
}
