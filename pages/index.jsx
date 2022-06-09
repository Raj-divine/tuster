import { AppShell, useMantineColorScheme } from "@mantine/core";
import AppHeader from "../components/AppHeader/AppHeader";

import LandingPageHeader from "../components/LandingPage/LandingPageHeader/LandingPageHeader";
import Head from "next/head";
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
      </AppShell>
    </>
  );
}
