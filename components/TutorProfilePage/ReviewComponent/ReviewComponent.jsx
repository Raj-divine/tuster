import ReviewForm from "../ReviewForm/ReviewForm";
import { ScrollArea } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../../../firebase/firebaseConfig";
import { useState } from "react";
import ReviewComponentReview from "./ReviewComponentReview/ReviewComponentReview";
const ReviewComponent = ({ tutor }) => {
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    setReviews([]);

    const reviewRef = collection(db, "reviews");
    const q = query(reviewRef, where("of", "==", tutor.uid), limit(10));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setReviews((prevReviews) => [...prevReviews, doc.data()]);
    });
  };

  useEffect(() => {
    getReviews();
  }, []);

  const [user] = useLocalStorage({ key: "user-data" });
  const { uid } = tutor;
  return (
    <div className="mt-6">
      <ScrollArea style={{ height: 400 }}>
        {user.notReviewed?.includes(uid) && (
          <ReviewForm getReviews={getReviews} tutor={tutor} />
        )}
        {reviews.map((review, i) => {
          return (
            <ReviewComponentReview key={review.user.uid + i} review={review} />
          );
        })}
      </ScrollArea>
    </div>
  );
};

export default ReviewComponent;
