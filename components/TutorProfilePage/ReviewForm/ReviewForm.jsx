import { Textarea, Text, Button } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { collection, addDoc } from "firebase/firestore";
import { useLocalStorage } from "@mantine/hooks";
import { db } from "../../../firebase/firebaseConfig";
const ReviewForm = ({ tutor }) => {
  const { uid: tutorId } = tutor;
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [body, setBody] = useState("");
  const [bodyError, setBodyError] = useState("");

  const [user] = useLocalStorage({ key: "user-data" });

  const submitHandler = async (e) => {
    e.preventDefault();
    if (rating < 1) {
      showNotification({
        autoClose: 3000,
        title: "Please Rate the tutor",
        message: "Rating can't be empty",
        color: "red",
      });
      return;
    }
    if (body.trim().length < 6) {
      setBodyError("Please write a valid review");
      return;
    }

    const reviewRef = await addDoc(collection(db, "reviews"), {
      body,
      rating,
      from: user.uid,
      of: tutorId,
    });
    console.log(reviewRef);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="border rounded-lg p-2 sm:p-4 dark:border-dark-400"
    >
      <div className="mb-4">
        <Text className="text-xl" color="dimmed">
          Leave a review
        </Text>
      </div>
      <div className="mb-2">
        <div className="mb-0.5">
          <Text className="text-sm font-medium">
            Rating <span className="text-red-400">*</span>
          </Text>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => {
            const ratingValue = i + 1;
            return (
              <label key={i} className="mr-0.5">
                <input
                  className="hidden"
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                <FaStar
                  className="cursor-pointer transition-colors"
                  color={
                    ratingValue <= (hover || rating) ? "#eab308" : "#e4e9e5"
                  }
                  size={20}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
      </div>
      <Textarea
        autosize
        placeholder="Write a review"
        minRows={3}
        label="Write a review"
        required
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
          setBodyError("");
        }}
        error={bodyError}
      />
      <div className="mt-4 flex justify-end ">
        <Button type="submit" className="button-primary">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ReviewForm;
