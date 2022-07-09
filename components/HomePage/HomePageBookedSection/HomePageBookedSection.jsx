import { ScrollArea } from "@mantine/core";
import BookedSectionCard from "../BookedSectionCard/BookedSectionCard";
import { useEffect } from "react";
import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import { getUserData } from "../../../utilities";
const HomePageBookedSection = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    const getTutor = async () => {
      setTutors([]);
      const user = await getUserData();
      user.bookings.forEach(async (booking) => {
        const tutorSpan = await getDoc(doc(db, "tutors", booking.tutor));
        setTutors((prevState) => {
          return [...prevState, tutorSpan.data()];
        });
      });
    };
    getTutor();
  }, []);
  return (
    <section className="px-4 sm:px-10 pt-10">
      <h3 className="font-merriweather italic text-xl xs:text-2xl sm:text-4xl ">
        Currently Active sessions
      </h3>
      <div className="2xl:w-2/3 xl:w-11/12">
        <ScrollArea
          style={{ height: 400 }}
          className="rounded-lg border p-2 sm:p-4 lg:p-10 dark:border-dark-400 mt-11"
        >
          {tutors.map((tutor, i) => {
            return <BookedSectionCard key={i} tutor={tutor} />;
          })}
        </ScrollArea>
      </div>
    </section>
  );
};

export default HomePageBookedSection;
