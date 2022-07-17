import { doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import dayjs from "dayjs";
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
  console.log(errors);
  if (location.length < 5) {
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

  if (timeDifference > 59 && !location.length < 5 && !alreadyBooked) {
    try {
      const { currentUser } = getAuth();
      await setDoc(
        doc(db, "users", currentUser.uid),
        {
          bookings: [
            ...user.bookings,
            {
              tutor: tutorId,
              time: [
                dayjs(time[0]).toISOString(),
                dayjs(time[1]).toISOString(),
              ],
              date: [
                dayjs(date[0]).toISOString(),
                dayjs(date[1]).toISOString(),
              ],
              where: location,
              totalPrice,
            },
          ],
          notReviewed: [...user.notReviewed, tutorId],
        },
        { merge: true }
      );

      setUser((prevUser) => ({
        ...prevUser,
        bookings: [
          ...prevUser.bookings,
          {
            tutor: tutorId,
            time: [dayjs(time[0]).toISOString(), dayjs(time[1]).toISOString()],
            date: [dayjs(date[0]).toISOString(), dayjs(date[1]).toISOString()],
            where: location,
            totalPrice,
          },
        ],
        notReviewed: [...prevUser.notReviewed, tutorId],
      }));
      showNotification({
        autoClose: 3000,
        color: "teal",
        title: "Hurray!",
        message: "Booked successfully",
      });
      setErrors({ time: "", location: "" });
    } catch (error) {
      console.log(error);
    }
  }
};

export default submitHandler;
