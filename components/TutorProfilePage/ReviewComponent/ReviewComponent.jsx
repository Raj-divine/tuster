import ReviewForm from "../ReviewForm/ReviewForm";
import { ScrollArea } from "@mantine/core";
const ReviewComponent = ({ tutor }) => {
  return (
    <div className="mt-6">
      <ScrollArea style={{ height: 350 }}>
        <ReviewForm />
      </ScrollArea>
    </div>
  );
};

export default ReviewComponent;
