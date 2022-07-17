import { Textarea, Text, Button } from "@mantine/core";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <form className="border rounded-lg p-2 sm:p-4 dark:border-dark-400">
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
      />
      <div className="mt-4 flex justify-end ">
        <Button className="button-primary">Submit</Button>
      </div>
    </form>
  );
};

export default ReviewForm;
