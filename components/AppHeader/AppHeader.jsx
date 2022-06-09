import { ActionIcon, useMantineColorScheme, Text } from "@mantine/core";
import { BsMoon, BsSunFill, BsGithub } from "react-icons/bs";
import logo from "../../assets/imgs/logo.svg";
import Image from "next/image";
import Link from "next/link";
const AppHeader = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <div
      className={
        colorScheme === "dark"
          ? "dark sticky top-0 bg-dark-700 z-10"
          : "sticky top-0 bg-white z-10"
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
              referrerPolicy="no-referrer"
            >
              <ActionIcon
                className="border border-gray-200 dark:border-dark-300"
                size="lg"
                variant="light"
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
            >
              {colorScheme === "dark" ? <BsSunFill /> : <BsMoon />}
            </ActionIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
