import {
  ActionIcon,
  useMantineColorScheme,
  Text,
  Header,
  MediaQuery,
  Burger,
} from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavbar } from "../../context/navbarSlice";
import { BsMoon, BsSunFill, BsGithub } from "react-icons/bs";
import logo from "../../assets/imgs/logo.svg";
import Image from "next/image";
import Link from "next/link";

const AppHeader = ({ hiddenBurger }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.navbarSlice);
  return (
    <Header
      className={
        colorScheme === "dark"
          ? "dark sticky top-0  z-10"
          : "sticky top-0  z-10"
      }
    >
      <div className=" flex items-center px-4 sm:px-8 py-3 justify-between border-b border-b-gray-200 dark:border-b-dark-300">
        <Image src={logo} priority width={40} height={40} alt="logo" />
        <Link href="/" passHref>
          <Text component="a" className="font-dancingScript text-4xl font-bold">
            Tuster
          </Text>
        </Link>
        <div className="flex">
          <div className=" mr-4">
            <a
              href="https://github.com/Raj-divine/tuster"
              target="_blank"
              rel="noreferrer"
            >
              <ActionIcon
                className="border border-gray-200 dark:border-dark-300"
                size="lg"
                variant="light"
                aria-label="Github"
              >
                <BsGithub />
              </ActionIcon>
            </a>
          </div>
          <div>
            <ActionIcon
              size="lg"
              variant="light"
              className="border border-gray-200 dark:border-dark-300"
              onClick={() => toggleColorScheme()}
              aria-label="Toggle color scheme"
            >
              {colorScheme === "dark" ? <BsSunFill /> : <BsMoon />}
            </ActionIcon>
          </div>
          <div className={hiddenBurger ? "hidden" : ""}>
            <MediaQuery largerThan="md" styles={{ display: "none" }}>
              <Burger
                opened={isOpen}
                onClick={() => dispatch(toggleNavbar())}
                size="md"
                color="#868E96"
                ml="sm"
                mr={-5}
              />
            </MediaQuery>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
