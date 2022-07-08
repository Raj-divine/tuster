import dayjs from "dayjs";
const submitHandler = ({ errors, setErrors, location, timeDifference }) => {
  if (location.trim() === "") {
    setErrors({ location: "Please enter a location" });
  } else if (location.length < 5) {
    setErrors({ location: "Please enter a valid location" });
  } else if (timeDifference < 59) {
    setErrors({ time: "A session can't be less than 1 hour" });
  } else {
    setErrors({
      time: "",
      location: "",
    });
  }
};

export default submitHandler;
