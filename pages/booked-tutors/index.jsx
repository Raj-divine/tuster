import Head from "next/head";
import { AppShell, Divider, useMantineColorScheme } from "@mantine/core";
import AppLoader from "../../components/AppLoader/AppLoader";
import AppHeader from "../../components/AppHeader/AppHeader";
import AppNavbar from "../../components/AppNavbar/AppNavbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import BookedTutorsPageHeader from "../../components/BookedTutorsPage/BookedTutorsPageHeader/BookedTutorsPageHeader";
import BookedTutorsPageMainSection from "../../components/BookedTutorsPage/BookedTutorsPageMainSection/BookedTutorsPageMainSection";
const BookedTutorPage = () => {
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
        <title>Home | Tuster</title>
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
            >
              <BookedTutorsPageHeader />
              <Divider my="sm" className="p-0 m-0" />
              <BookedTutorsPageMainSection />
            </div>
          </AppShell>
        </>
      )}
      {!userLoggedIn && <AppLoader />}
    </>
  );
};

export default BookedTutorPage;
