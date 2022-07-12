import { doc, getDoc } from "firebase/firestore";
import Head from "next/head";
import { useMantineColorScheme, AppShell } from "@mantine/core";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../../../firebase/firebaseConfig";
import { useRouter } from "next/router";
import AppLoader from "../../../components/AppLoader/AppLoader";
import { useEffect, useState } from "react";
import AppHeader from "../../../components/AppHeader/AppHeader";
import AppNavbar from "../../../components/AppNavbar/AppNavbar";
import TutorProfileMainSection from "../../../components/TutorProfilePage/TutorProfileMainSection/TutorProfileMainSection";
import TutorProfileDetailSection from "../../../components/TutorProfilePage/TutorProfileDetailSection/ProfileDetailSection";

const TutorProfilePage = ({ tutor }) => {
  const router = useRouter();
  const { colorScheme } = useMantineColorScheme();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
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

  useEffect(() => {
    if (!tutor) {
      router.replace("/not-found");
    }
  }, [tutor]);

  if (router.isFallback) {
    return <AppLoader />;
  }
  return (
    <>
      <Head>
        <title>{`${tutor.firsName} ${tutor.lastName}`}</title>
      </Head>
      {userLoggedIn && (
        <AppShell
          navbarOffsetBreakpoint="md"
          fixed
          header={<AppHeader />}
          navbar={<AppNavbar />}
        >
          <div className={colorScheme === "dark" ? "dark" : ""}>
            <TutorProfileMainSection tutor={tutor} />
            <TutorProfileDetailSection tutor={tutor} />
          </div>
        </AppShell>
      )}
      {!userLoggedIn && <AppLoader />}
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { tutorId: "H61y8XTR8rtB3aM68bgx" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const tutorRef = doc(db, "tutors", params.tutorId);
  const tutorSnap = await getDoc(tutorRef);
  return {
    props: {
      tutor: { ...tutorSnap.data(), uid: params.tutorId },
    },
    revalidate: 120,
  };
}

export default TutorProfilePage;
