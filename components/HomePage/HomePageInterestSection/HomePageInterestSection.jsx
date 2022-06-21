import HomePageTutorCard from "../HomePageTutorCard/HomePageTutorCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig.js";
import { useEffect } from "react";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
const HomePageInterestSection = () => {
  const [tutors, setTutors] = useState([]);
  useEffect(() => {
    async function getData() {
      const tutorRef = collection(db, "tutors");
      const { currentUser } = getAuth();

      const docRef = doc(db, "users", currentUser.uid);

      const docSnap = await getDoc(docRef);

      const q = query(
        tutorRef,
        where("experties", "array-contains-any", docSnap.data().subjects)
      );

      const querySnapshot = await getDocs(q);
      const tutorData = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), uid: doc.id };
      });
      setTutors(tutorData);
    }
    getData();
  }, []);

  return (
    <section className="px-10 pt-10 ">
      <h3 className="font-merriweather italic  text-4xl ">
        Based on your interests, Raj
      </h3>
      {tutors.map((tutor) => {
        return <HomePageTutorCard key={tutor.uid} tutor={tutor} />;
      })}
    </section>
  );
};

export default HomePageInterestSection;
