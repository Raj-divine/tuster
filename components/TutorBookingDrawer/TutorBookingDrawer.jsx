import { Button, Drawer, TextInput, Text } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import submitHandler from "./utils/submitHandler";
import dayjs from "dayjs";
import { DateRangePicker, TimeRangeInput } from "@mantine/dates";
import { useDispatch, useSelector } from "react-redux";
import { closeDrawer } from "../../context/drawerSlice";
const TutorBookingDrawer = () => {
  const [user, setUser] = useLocalStorage({ key: "user-data" });
  const [errors, setErrors] = useState({ time: "", location: "" });
  const [tutor, setTutor] = useState({});
  const { isOpen, uid: tutorId } = useSelector((state) => state.drawer);
  const dispatch = useDispatch();

  const [date, setDate] = useState([
    dayjs(new Date()).add(1, "day").toDate(),
    dayjs(new Date()).add(3, "days").toDate(),
  ]);

  const [location, setLocation] = useState(user.address);

  const timeStart = dayjs(new Date()).add(4, "hours").toDate();
  const timeEnd = dayjs(timeStart).add(1, "hour").toDate();

  const [time, setTime] = useState([timeStart, timeEnd]);

  const timeDifference = dayjs(time[1]).diff(dayjs(time[0]), "minutes");
  const dateDifference = dayjs(date[1]).diff(dayjs(date[0]), "days");

  const onCloseHandler = () => {
    dispatch(closeDrawer());
  };
  useEffect(() => {
    const getTutor = async () => {
      const tutorSnap = await getDoc(doc(db, "tutors", tutorId));
      if (tutorSnap.exists()) {
        setTutor(tutorSnap.data());
      }
    };
    getTutor();
  }, [isOpen]);

  let totalPrice =
    tutor.pricing * (Math.ceil(timeDifference / 60) * (dateDifference + 1));
  return (
    <>
      <Drawer
        position="right"
        size="lg"
        opened={isOpen}
        onClose={onCloseHandler}
        title="Book a class now!"
        classNames={{
          header: "m-6",
          title: "text-xl tracking-wider",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitHandler({
              errors,
              setErrors,
              location,
              timeDifference,
              time,
              date,
              tutorId,
              user,
              setUser,
              totalPrice,
            });
            onCloseHandler();
          }}
          className="m-6"
        >
          <div>
            <TextInput
              placeholder="Where would like to have a session?"
              label="Where"
              value={location}
              error={errors.location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="mt-4">
            <DateRangePicker
              label="Date"
              placeholder="Select at least 2 days"
              allowLevelChange={false}
              minDate={dayjs(new Date()).add(1, "day").toDate()}
              maxDate={dayjs(new Date()).add(30, "days").toDate()}
              value={date}
              onChange={setDate}
              required
              clearable={false}
            />
          </div>
          <div className="mt-4">
            <TimeRangeInput
              label="Time"
              value={time}
              onChange={setTime}
              error={errors.time}
              required
            />
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div>
              <Text component="span" className="mr-2 font-semibold">
                Total:
              </Text>

              <Text component="span" className="font-semibold">
                {totalPrice >= 0 ? `$${totalPrice}` : "$0"}
              </Text>
            </div>
            <Button
              type="submit"
              className="bg-teal-400 hover:bg-teal-500 dark:bg-teal-500 dark:hover:bg-teal-600"
            >
              Book now
            </Button>
          </div>
        </form>
      </Drawer>
    </>
  );
};

export default TutorBookingDrawer;
