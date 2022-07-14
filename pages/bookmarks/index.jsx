import { useMantineColorScheme, AppShell } from "@mantine/core";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import AppLoader from "../../components/AppLoader/AppLoader";
import AppNavbar from "../../components/AppNavbar/AppNavbar";
import Head from "next/head";
const BookmarkPage = () => {
  const { colorScheme } = useMantineColorScheme();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace("/");
      } else {
        setUserLoggedIn(true);
      }
    });
  }, [auth]);
  return (
    <>
      <Head>
        <title>Bookmarks | Tuster</title>
      </Head>
      {userLoggedIn && (
        <>
          <AppShell
            padding={0}
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
      )}
      {!userLoggedIn && <AppLoader />}
    </>
  );
};

export default BookmarkPage;
