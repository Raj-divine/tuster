import ReviewForm from "../ReviewForm/ReviewForm";
import { ScrollArea } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
const ReviewComponent = ({ tutor }) => {
  const [user, setUser] = useLocalStorage({ key: "user-data" });
  const { uid } = tutor;
  return (
    <div className="mt-6">
      <ScrollArea style={{ height: 350 }}>
        {user.notReviewed.includes(uid) && <ReviewForm tutor={tutor} />}
      </ScrollArea>
    </div>
  );
};

export default ReviewComponent;
