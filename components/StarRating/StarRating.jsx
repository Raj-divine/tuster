import { FaStar } from "react-icons/fa";
const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(Math.round(rating))].map((item, i) => {
        return <FaStar key={i} className="ml-0.5" color="#eab308" />;
      })}
    </div>
  );
};

export default StarRating;
