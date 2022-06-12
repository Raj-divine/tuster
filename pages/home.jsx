import { AppShell, useMantineColorScheme } from "@mantine/core";
import Head from "next/head";
import AppHeader from "../components/AppHeader/AppHeader";
import AppNavbar from "../components/AppNavbar/AppNavbar";

const Home = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <>
      <Head>
        <title>Tuster | Home</title>
      </Head>
      <AppShell fixed header={<AppHeader />} navbar={<AppNavbar />}>
        <div className={colorScheme === "dark" ? "dark" : ""}></div>
      </AppShell>
    </>
  );
};

export default Home;
