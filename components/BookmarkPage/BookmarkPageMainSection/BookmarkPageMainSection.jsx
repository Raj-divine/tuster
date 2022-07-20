import { useEffect, useState } from "react";
import { useLocalStorage } from "@mantine/hooks";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import BookmarkPageBookmark from "../BookmarkPageBookmark/BookmarkPageBookmark";
import Image from "next/image";
import noData from "../../../assets/imgs/no-data.png";
const BookmarkPageMainSection = () => {
  const [user] = useLocalStorage({ key: "user-data" });
  const [tutors, setTutors] = useState([]);

  const tutorRemoveHandler = (tutorId) => {
    setTutors((prevTutors) =>
      prevTutors.filter((tutor) => tutor.uid !== tutorId)
    );
  };

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
  }, []);

  return (
    <section className="flex justify-center">
      <div className="w-11/12 sm:w-3/4 md:w-3/5 xl:w-11/12 2xl:w-3/4  mt-10">
        {tutors.length > 0 &&
          tutors.map((tutor, i) => {
            return (
              <BookmarkPageBookmark
                key={i}
                tutorRemoveHandler={tutorRemoveHandler}
                tutor={tutor}
              />
            );
          })}
        {user.bookmarks?.length === 0 && (
          <div className="w-1/2 my-0 mx-auto flex items-center justify-center">
            <Image src={noData} />
          </div>
        )}
      </div>
    </section>
  );
};

export default BookmarkPageMainSection;
