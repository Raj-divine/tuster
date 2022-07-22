import { Avatar, Text } from "@mantine/core";
import StarRating from "../../../StarRating/StarRating";
const ReviewComponentReview = ({ review }) => {
  return (
    <div className="rounded-lg border p-3 mb-4 dark:border-dark-400">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div>
            <Avatar
              classNames={{
                placeholder: "bg-teal-500 text-white",
              }}
              radius="xl"
            >
              {review.user.firstName[0].toUpperCase()}
            </Avatar>
          </div>
          <Text color="dimmed" className="ml-2 text-lg">
            {review.user.firstName} {review.user.lastName}
          </Text>
        </div>
        <div>
          <StarRating rating={review.rating} />
        </div>
      </div>
      <Text className="mt-4 text-sm">{review.body}</Text>
    </div>
  );
};

export default ReviewComponentReview;
