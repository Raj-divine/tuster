import { AppShell, useMantineColorScheme } from "@mantine/core";
import AppHeader from "../components/AppHeader/AppHeader";

import LandingPageHeader from "../components/LandingPage/LandingPageHeader/LandingPageHeader";
export default function Home() {
  const { colorScheme } = useMantineColorScheme({
    key: "mantine-color-scheme",
  });

  return (
    <AppShell header={<AppHeader />}>
      <LandingPageHeader colorScheme={colorScheme} />
    </AppShell>
  );
}
