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
      <div className="w-11/12 sm:w-3/4 md:w-3/5 xl:w-11/12 2xl:w-3/4  mt-10">
        {tutors.length > 0 &&
          tutors.map((tutor) => {
            return <BookmarkPageBookmark tutor={tutor} />;
          })}
        {user.bookmarks.length === 0 && (
          <div className="w-full text-5xl font-raleway h-96 flex items-center justify-center">
            No bookmarked tutors
          </div>
        )}
      </div>
    </section>
  );
};

export default BookmarkPageMainSection;
