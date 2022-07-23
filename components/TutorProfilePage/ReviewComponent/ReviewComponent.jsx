import ReviewForm from "../ReviewForm/ReviewForm";
import { ScrollArea, Text, Loader, Center } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../../../firebase/firebaseConfig";
import { useState } from "react";
import ReviewComponentReview from "./ReviewComponentReview/ReviewComponentReview";
const ReviewComponent = ({ tutor }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user] = useLocalStorage({ key: "user-data" });
  const getReviews = async () => {
    setReviews([]);
    setIsLoading(true);
    const reviewRef = collection(db, "reviews");
    const q = query(reviewRef, where("of", "==", tutor.uid), limit(10));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setReviews((prevReviews) => [...prevReviews, doc.data()]);
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getReviews();
  }, []);

  const alreadyReviewed = reviews.some(
    (review) => review.user.uid === user.uid
  );

  const { uid } = tutor;
  return (
    <div className="mt-6">
      <ScrollArea style={{ height: 400 }}>
        {!isLoading && user.notReviewed?.includes(uid) && !alreadyReviewed && (
          <ReviewForm getReviews={getReviews} tutor={tutor} />
        )}
        {!isLoading &&
          reviews.map((review, i) => {
            return (
              <ReviewComponentReview
                key={review.user.uid + i}
                review={review}
              />
            );
          })}
        {!isLoading && reviews.length < 1 && (
          <Center>
            <Text className="text-2xl">No reviews</Text>
          </Center>
        )}
        <Center>{isLoading && <Loader />}</Center>
      </ScrollArea>
    </div>
  );
};

export default ReviewComponent;
