import Image from "next/image";
import { Text, Badge, SimpleGrid, Button, Space } from "@mantine/core";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { openDrawer } from "../../../context/drawerSlice";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { db } from "../../../firebase/firebaseConfig";
import { useLocalStorage } from "@mantine/hooks";
import Link from "next/link";
import { doc, setDoc } from "firebase/firestore";
const BookmarkPageBookmark = ({ tutor }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useLocalStorage({ key: "user-data" });
  const buttonRef = useRef();
  const { image, firsName: firstName, lastName, expertise, uid } = tutor;

  const bookmarkHandler = async () => {
    if (user.bookmarks.includes(uid)) {
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

  return (
    <div className="flex justify-between mb-8">
      <div className="flex">
        <div className="w-32 h-32 relative shadow-md">
          <Image
            className="object-cover rounded-lg object-center"
            src={image}
            layout="fill"
            alt={`${firstName} ${lastName}`}
          />
          <div
            onClick={bookmarkHandler}
            className="z-10 top-2 cursor-pointer absolute left-4"
          >
            <AiOutlineCloseCircle className="text-white" size={25} />
          </div>
        </div>

        <div className="flex flex-col justify-around ml-5">
          <div>
            <Text className="text-xl font-semibold">
              {firstName} {lastName}
            </Text>
          </div>
          <div>
            <SimpleGrid cols={3}>
              {expertise.map((item) => {
                return (
                  <Badge className="text-teal-500 bg-teal-100 dark:bg-teal-900 dark:text-teal-200">
                    {item}
                  </Badge>
                );
              })}
            </SimpleGrid>
          </div>
        </div>
      </div>

      <div className="flex">
        <Link href={`/tutor/${uid}`}>
          <Button
            className="text-teal-400 hover:bg-teal-50 dark:text-white dark:hover:bg-dark-500"
            variant="subtle"
            component="a"
          >
            View more
          </Button>
        </Link>
        <Space w={10} />
        <Button
          className="bg-teal-400 hover:bg-teal-500 dark:bg-teal-500 dark:hover:bg-teal-600"
          component="a"
          ref={buttonRef}
          data-uid={uid}
          onClick={() => {
            dispatch(openDrawer({ uid: buttonRef.current.dataset.uid }));
          }}
        >
          Book now
        </Button>
      </div>
    </div>
  );
};

export default BookmarkPageBookmark;
