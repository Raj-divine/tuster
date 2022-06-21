import HomePageTutorCard from "../HomePageTutorCard/HomePageTutorCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig.js";
import { useEffect } from "react";
import { useState } from "react";
import { useLocalStorage } from "@mantine/hooks";
const HomePageInterestSection = () => {
  const [tutors, setTutors] = useState([]);
  const [userData] = useLocalStorage({ key: "user-data" });
  // useEffect(() => {
  //   async function getData() {
  //     const tutorRef = collection(db, "tutors");
  //     const q = query(
  //       tutorRef,
  //       where("experties", "array-contains-any", userData.subjects)
  //     );

  //     const querySnapshot = await getDocs(q);
  //     const tutorData = querySnapshot.docs.map((doc) => {
  //       return { ...doc.data(), uid: doc.id };
  //     });
  //     setTutors(tutorData);
  //   }
  //   getData();
  // }, []);

  return (
    <section className="px-10 pt-10 ">
      <h3 className="font-merriweather italic  text-4xl ">
        Based on your interests, Raj
      </h3>
      {/* {tutors.map((tutor) => {
        return <HomePageTutorCard tutor={tutor} />;
      })} */}
      <HomePageTutorCard />
    </section>
  );
};

export default HomePageInterestSection;
