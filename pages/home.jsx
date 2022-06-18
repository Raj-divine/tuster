import { AppShell, useMantineColorScheme } from "@mantine/core";
import Head from "next/head";
import AppHeader from "../components/AppHeader/AppHeader";
import AppNavbar from "../components/AppNavbar/AppNavbar";
import { app } from "../firebase/firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import HomePageHeader from "../components/HomePage/HomePageHeader";
const Home = () => {
  const { colorScheme } = useMantineColorScheme();
  const router = useRouter();
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.replace("/");
    }
  });
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
        >
          <HomePageHeader />
        </div>
      </AppShell>
    </>
  );
};

export default Home;
