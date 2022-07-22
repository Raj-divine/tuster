import Image from "next/image";
import { Button, Center, Space, Text } from "@mantine/core";
import StarRating from "../../StarRating/StarRating";
import { useDispatch } from "react-redux";
import { useLocalStorage } from "@mantine/hooks";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { openDrawer } from "../../../context/drawerSlice";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
const TutorProfileMainSection = ({ tutor }) => {
  const [user, setUser] = useLocalStorage({ key: "user-data" });

  const {
    firsName: firstName,
    lastName,
    totalStudents,
    rating,
    pricing,
    image,
    uid,
  } = tutor;

  const dispatch = useDispatch();

  const bookmarkHandler = async () => {
    if (user.bookmarks?.includes(uid)) {
      setUser((prevUser) => {
        return {
          ...prevUser,
          bookmarks: prevUser.bookmarks.filter((item) => item !== uid),
        };
      });

      await setDoc(
        doc(db, "users", user.uid),
        {
          ...user,
          bookmarks: user.bookmarks.filter((item) => item !== uid),
        },
        { merge: true }
      );
    } else {
      setUser((prevUser) => {
        return {
          ...prevUser,
          bookmarks: [...prevUser.bookmarks, uid],
        };
      });

      await setDoc(
        doc(db, "users", user.uid),
        {
          ...user,
          bookmarks: [...user.bookmarks, uid],
        },
        { merge: true }
      );
    }
  };

  let bookmarkIcon = <BsBookmark size={30} />;

  user.bookmarks?.forEach((bookmark) => {
    if (bookmark === uid) {
      bookmarkIcon = <BsFillBookmarkFill size={30} />;
    }
  });

  return (
    <div className="2xl:w-2/3 mt-10 mx-auto justify-around items-center flex flex-col xl:flex-row">
      <div className="flex w-11/12 xl:w-fit">
        <div className="relative w-36 my-0 mx-auto h-36 rounded-full overflow-hidden shadow-xl">
          <Image
            src={image}
            layout="fill"
            className="object-cover object-center"
            alt={`${firstName} ${lastName}`}
          />
        </div>
        <div className="xl:hidden">
          <div
            className="cursor-pointer flex items-center justify-center rounded-full w-14 h-14 hover:bg-dark-800"
            onClick={bookmarkHandler}
          >
            {bookmarkIcon}
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col mt-7 xl:mt-0 h-full items-center xl:items-stretch justify-center">
          <div className="flex items-center">
            <Text className="text-3xl font-light">
              {firstName} {lastName}
            </Text>
            <Button
              className="ml-4 px-2 py-1 text-teal-400 text-xs border-teal-400"
              variant="outline"
              component="a"
              size="xs"
              onClick={() => {
                dispatch(openDrawer({ uid }));
              }}
            >
              Book now
            </Button>
          </div>
          <Space h={20} />
          <div className="flex flex-col sm:flex-row">
            <Center>
              <Text className="mr-2 font-semibold">{totalStudents}</Text>
              <Text className="text-lg">Students taught</Text>
            </Center>
            <Space w={20} />
            <Center>
              <Text className="mr-2 font-semibold">${pricing}</Text>
              <Text className="text-lg">Per hour</Text>
            </Center>
            <Space w={20} />
            <Center>
              <Text className="mr-2 font-semibold">{rating}</Text>
              <StarRating rating={rating} />
            </Center>
          </div>
        </div>
      </div>
      <div className="hidden xl:block">
        <div className="flex h-full items-center justify-center">
          <div
            className="cursor-pointer flex items-center justify-center rounded-full w-14 h-14 hover:bg-dark-800"
            onClick={bookmarkHandler}
          >
            {bookmarkIcon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorProfileMainSection;
