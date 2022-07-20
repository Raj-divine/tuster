import HomePageTutorCard from "../HomePageTutorCard/HomePageTutorCard";
import {
  collection,
  getDocs,
  query,
  where,
  limit,
  orderBy,
  startAfter,
} from "firebase/firestore";
import { Button, Center, Loader, ScrollArea, Text } from "@mantine/core";
import { db } from "../../../firebase/firebaseConfig.js";
import { useEffect } from "react";

import { useState } from "react";
import { getUserData } from "../../../utilities";
import { useLocalStorage } from "@mantine/hooks";

const HomePageInterestSection = () => {
  const [tutors, setTutors] = useState([]);
  const [isFinal, setIsFinal] = useState(false);
  const [latestDoc, setLatestDoc] = useState("0");
  const [userData] = useLocalStorage({ key: "user-data" });

  async function getTutors() {
    const tutorRef = collection(db, "tutors");
    const user = await getUserData();

    const q = query(
      tutorRef,
      where("expertise", "array-contains-any", user.subjects),
      orderBy("rating", "desc"),
      limit(10),
      startAfter(latestDoc)
    );

    const tutorSnapshot = await getDocs(q);
    const tutorData = tutorSnapshot.docs.map((doc) => {
      return { ...doc.data(), uid: doc.id };
    });
    if (tutorData.length % 10 !== 0) {
      setIsFinal(true);
    }

    setTutors((prevTutor) => [...prevTutor, ...tutorData]);
    setLatestDoc(tutorSnapshot.docs[tutorSnapshot.docs.length - 1] || null);
  }

  useEffect(() => {
    getTutors();
  }, []);

  return (
    <section className="px-4 sm:px-10 pt-10">
      <h3 className="section-heading italic inline-block">
        Based on your interests, {userData.firstName}
      </h3>
      <div className="2xl:w-2/3 xl:w-11/12">
        <ScrollArea
          className="rounded-lg border relative p-2 sm:p-4 lg:p-10 dark:border-dark-400 mt-11"
          style={{ height: 900 }}
        >
          {tutors.map((tutor) => {
            return <HomePageTutorCard key={tutor.uid} tutor={tutor} />;
          })}

          {!isFinal && tutors.length !== 0 && (
            <Center>
              <Button className="button-primary" onClick={getTutors}>
                load more
              </Button>
            </Center>
          )}

          {isFinal && tutors.length !== 0 && (
            <Center>
              <Text className="text-2xl">No More Tutors</Text>
            </Center>
          )}
          {!tutors.length && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader />
            </div>
          )}
        </ScrollArea>
      </div>
    </section>
  );
};

export default HomePageInterestSection;
