import { Button, Card, Text } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import dayjs from "dayjs";
import Image from "next/image";
import { useRef } from "react";
const BookedTutorsPageCard = ({ tutor, date, time, totalPrice }) => {
  const { image, firsName: firstName, lastName, description, uid } = tutor;
  const [user, setUser] = useLocalStorage({ key: "user-data" });

  const buttonRef = useRef();

  const cancelHandler = async () => {
    const newBookings = user.bookings.filter(
      (item) => item.tutor !== buttonRef.current.dataset.uid
    );
    await setDoc(doc(db, "users", user.uid), {
      ...user,
      bookings: newBookings,
    });
    setUser((prevUser) => {
      return {
        ...prevUser,
        bookings: newBookings,
      };
    });
  };

  return (
    <Card shadow="lg" className="rounded-lg" p="lg">
      <Card.Section className="h-72">
        <div className="relative h-full">
          <Image
            className="object-cover object-center"
            src={image}
            layout="fill"
            alt={`${firstName} ${lastName}`}
          />
        </div>
      </Card.Section>
      <Card.Section className="mx-1 my-2">
        <Text className="text-xl mb-2 font-semibold">
          {firstName} {lastName}
        </Text>
        <Text lineClamp={2} color="dimmed" className="text-sm">
          {description}
        </Text>
      </Card.Section>

      <Card.Section className="mx-1 pt-2">
        <div className="flex mb-2">
          <Text className="font-medium mr-1">
            {dayjs(date[0]).format("DD-MMM")}
          </Text>
          <Text className=" font-medium">To</Text>
          <Text className=" font-medium ml-1">
            {dayjs(date[1]).format("DD-MMM")}
          </Text>
        </div>

        <div className="flex mb-2">
          <Text className=" font-medium mr-1">
            {dayjs(time[0]).format("H:mm")}
          </Text>
          <Text className=" font-medium">To</Text>
          <Text className=" font-medium ml-1">
            {dayjs(time[1]).format("H:mm")}
          </Text>
        </div>
        <div>
          <Text className="font-medium">${totalPrice}</Text>
        </div>
      </Card.Section>
      <Card.Section className="mt-3 mx-1 pb-4">
        <Button
          data-uid={uid}
          onClick={cancelHandler}
          ref={buttonRef}
          className="w-full bg-teal-400 hover:bg-teal-500 dark:bg-teal-500 dark:hover:bg-teal-600"
        >
          Cancel Class
        </Button>
      </Card.Section>
    </Card>
  );
};

export default BookedTutorsPageCard;
