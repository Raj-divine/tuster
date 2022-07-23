import { Navbar, useMantineColorScheme, Avatar, Text } from "@mantine/core";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";
import { AiOutlineHome, AiOutlineLogout } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { getUserData } from "../../utilities";
import { BsBookmark } from "react-icons/bs";
import { useLocalStorage } from "@mantine/hooks";
import { getAuth, signOut } from "firebase/auth";
import { toggleNavbar } from "../../context/navbarSlice";
import { useDispatch } from "react-redux";
const NavLink = ({ children, href, exact, ...props }) => {
  const { pathname } = useRouter();
  const isActive = pathname === href;
  const dispatch = useDispatch();

  return (
    <Link href={href}>
      <a
        onClick={() => dispatch(toggleNavbar())}
        className={`${
          isActive && "active"
        } flex items-center w-full py-2 mb-1 rounded-lg px-3 font-semibold ${
          !isActive && "text-slate-500"
        } hover:bg-teal-50 hover:text-teal-500 transition-colors dark:text-dark-100 dark:hover:bg-dark-500`}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
};

const AppNavbar = () => {
  const { colorScheme } = useMantineColorScheme();
  const { isOpen } = useSelector((state) => state.navbar);
  const [userData, setUserData] = useLocalStorage({ key: "user-data" });
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const userDataPlaceHolder = {
    address: "",
    bookings: [],
    bookmarks: [],
    email: "",
    firstName: "",
    lastName: "",
    notReviewed: [],
    phone: "",
    socials: {},
    subjects: [],
  };
  const logout = () => {
    signOut(auth).then(() => {
      setUserData(userDataPlaceHolder);
    });
  };
  useEffect(() => {
    const getUser = async () => {
      const user = await getUserData();
      setUser(user);
    };
    getUser();
  }, []);

  return (
    <Navbar
      p={15}
      className={colorScheme === "dark" ? "dark" : ""}
      width={{ base: 300 }}
      hidden={!isOpen}
      height="100%"
      hiddenBreakpoint="md"
    >
      <Navbar.Section grow>
        <ul>
          <li>
            <NavLink href="/home">
              <AiOutlineHome className="text-2xl outline-2 mr-4" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink href="/booked-tutors">
              <FaChalkboardTeacher className="text-2xl mr-4" />
              Booked Tutors
            </NavLink>
          </li>
          <li>
            <NavLink href="/bookmarks">
              <BsBookmark className="text-2xl mr-4" />
              Bookmarks
            </NavLink>
          </li>

          <li>
            <button
              onClick={logout}
              className="flex text-red-400 hover:text-red-500 hover:bg-red-200 dark:hover:bg-red-900 dark:hover:text-red-400 transition-colors font-montserrat items-center w-full py-2 mb-1 rounded-lg px-3 font-semibold"
            >
              <AiOutlineLogout className="text-2xl mr-4" />
              Logout
            </button>
          </li>
        </ul>
      </Navbar.Section>
      {user && (
        <Navbar.Section className="mb-16 border-t border-t-gray-300 dark:border-t-dark-300">
          <Link href="/profile">
            <div className="flex mt-3 h-16 w-full items-center p-2 rounded-lg justify-between dark:hover:bg-dark-800 hover:bg-gray-100 cursor-pointer">
              <div>
                <Avatar
                  classNames={{
                    placeholder: "bg-teal-500 text-white",
                  }}
                  radius="xl"
                >
                  {user.firstName[0].toUpperCase()}
                </Avatar>
              </div>
              <div className="ml-4 w-3/4">
                <Text className="text-sm truncate w-4/5">
                  {user.firstName} {user.lastName}
                </Text>
                <Text className="text-xs truncate w-4/5">{user.email}</Text>
              </div>
              <div>
                <IoIosArrowForward />
              </div>
            </div>
          </Link>
        </Navbar.Section>
      )}
    </Navbar>
  );
};

export default AppNavbar;
