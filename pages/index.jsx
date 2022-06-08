import { AppShell } from "@mantine/core";
import AppHeader from "../components/AppHeader/AppHeader";
import { useLocalStorage } from "@mantine/hooks";
import LandingPageHeader from "../components/LandingPage/LandingPageHeader/LandingPageHeader";
export default function Home() {
  const [colorScheme] = useLocalStorage({ key: "mantine-color-scheme" });
  return (
    <AppShell header={<AppHeader colorScheme={colorScheme} />}>
      <LandingPageHeader colorScheme={colorScheme} />
    </AppShell>
  );
}
