import { SimpleGrid } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { useEffect, useState } from "react";
import BookedTutorsPageCard from "../BookedTutorsPageCard/BookedTutorsPageCard";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
const BookedTutorsPageMainSection = () => {
  const [user] = useLocalStorage({ key: "user-data" });
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    const getTutors = async () => {
      setTutors([]);
      user.bookings.forEach(async (booking) => {
        const tutorSnap = await getDoc(doc(db, "tutors", booking.tutor));
        setTutors((prevTutors) => {
          return [...prevTutors, { ...tutorSnap.data(), uid: booking.tutor }];
        });
      });
    };
    getTutors();
  }, [user]);

  return (
    <section className="my-10 mx-auto 2xl:w-3/4">
      {user.bookings.length > 0 && (
        <SimpleGrid cols={3}>
          {tutors.map((tutor, i) => {
            if (user.bookings[i]) {
              return (
                <BookedTutorsPageCard
                  key={i}
                  date={user.bookings[i].date}
                  time={user.bookings[i].time}
                  totalPrice={user.bookings[i].totalPrice}
                  tutor={tutor}
                />
              );
            }
          })}
        </SimpleGrid>
      )}
      {user.bookings.length === 0 && (
        <div className="w-full text-5xl font-raleway h-96 flex items-center justify-center">
          No Tutors booked :(
        </div>
      )}
    </section>
  );
};

export default BookedTutorsPageMainSection;
