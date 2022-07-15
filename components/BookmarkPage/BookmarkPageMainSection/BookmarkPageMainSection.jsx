import { useEffect, useState } from "react";
import { useLocalStorage } from "@mantine/hooks";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import BookmarkPageBookmark from "../BookmarkPageBookmark/BookmarkPageBookmark";
const BookmarkPageMainSection = () => {
  const [user] = useLocalStorage({ key: "user-data" });
  const [tutors, setTutors] = useState([]);
  useEffect(() => {
    setTutors([]);
    const getTutors = () => {
      user.bookmarks.forEach(async (tutorId) => {
        const tutorSnap = await getDoc(doc(db, "tutors", tutorId));
        setTutors((prevTutors) => [
          ...prevTutors,
          { ...tutorSnap.data(), uid: tutorId },
        ]);
      });
    };
    getTutors();
  }, [user]);

  return (
    <section className="flex justify-center">
      <div className="w-3/4 mt-10">
        {tutors.length > 0 &&
          tutors.map((tutor) => {
            return <BookmarkPageBookmark tutor={tutor} />;
          })}
      </div>
    </section>
  );
};

export default BookmarkPageMainSection;
