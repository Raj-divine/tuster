import { ScrollArea, Center, Text, Loader, Button } from "@mantine/core";
import { useState } from "react";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import { useEffect } from "react";
import HomePageTutorCard from "../HomePageTutorCard/HomePageTutorCard";
const HomePageNewSubSection = () => {
  const [tutors, setTutors] = useState([]);
  const [latestDoc, setLatestDoc] = useState("0");
  const [isFinal, setIsFinal] = useState(false);

  const getTutors = async () => {
    const tutorsRef = collection(db, "tutors");

    const q = query(
      tutorsRef,
      orderBy("totalStudents", "desc"),
      limit(10),
      startAfter(latestDoc)
    );

    const tutorSnapshot = await getDocs(q);
    const tutorData = tutorSnapshot.docs.map((doc) => {
      return { ...doc.data(), uid: doc.id };
    });
    if (tutorData.length < 10) {
      setIsFinal(true);
    }

    setTutors((prevTutor) => [...prevTutor, ...tutorData]);
    setLatestDoc(tutorSnapshot.docs[tutorSnapshot.docs.length - 1] || null);
  };

  useEffect(() => {
    getTutors();
  }, []);

  return (
    <section className="px-4 sm:px-10 pt-10 mb-10">
      <h3 className="font-raleway italic text-xl xs:text-2xl sm:text-4xl ">
        Let&apos;s try something new!
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

          {isFinal && tutors.length && (
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

export default HomePageNewSubSection;
