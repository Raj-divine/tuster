import { doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../../../firebase/firebaseConfig";
import { showNotification } from "@mantine/notifications";
const submitHandler = async ({
  errors,
  setErrors,
  time,
  date,
  tutorId,
  location,
  timeDifference,
  user,
  setUser,
  totalPrice,
}) => {
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

  let alreadyBooked = false;
  if (user.bookings.length === 10) {
    showNotification({
      autoClose: 3000,
      color: "red",
      title: "limit exceeded",
      message: "You can not book more than 5 tutors",
    });
    return;
  }

  user.bookings.forEach((item) => {
    if (item.tutor === tutorId) {
      showNotification({
        autoClose: 3000,
        color: "red",
        title: "Already booked",
        message: "You have already booked a class from this tutor",
      });
      alreadyBooked = true;
      return;
    }
  });

  if (!errors.time && !errors.location && !alreadyBooked) {
    try {
      const { currentUser } = getAuth();
      await setDoc(
        doc(db, "users", currentUser.uid),
        {
          bookings: [
            ...user.bookings,
            { tutor: tutorId, time, date, where: location, totalPrice },
          ],
        },
        { merge: true }
      );

      setUser((prevUser) => ({
        ...prevUser,
        bookings: [
          ...prevUser.bookings,
          { tutor: tutorId, time, date, where: location, totalPrice },
        ],
      }));
      showNotification({
        autoClose: 3000,
        color: "teal",
        title: "Hurray!",
        message: "Booked successfully",
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export default submitHandler;
