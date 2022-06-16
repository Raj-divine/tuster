import { AppShell, useMantineColorScheme } from "@mantine/core";
import Head from "next/head";
import AppHeader from "../components/AppHeader/AppHeader";
import AppNavbar from "../components/AppNavbar/AppNavbar";
const Home = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <>
      <Head>
        <title>Home | Tuster</title>
      </Head>
      <AppShell
        navbarOffsetBreakpoint="md"
        fixed
        header={<AppHeader />}
        navbar={<AppNavbar />}
      >
        <div
          className={
            colorScheme === "dark" ? "dark w-full h-full" : "w-full h-full"
          }
        ></div>
      </AppShell>
    </>
  );
};

export default Home;