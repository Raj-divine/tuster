import { ActionIcon, useMantineColorScheme, Text } from "@mantine/core";
import { BsMoon, BsSunFill, BsGithub } from "react-icons/bs";
import logo from "../../assets/imgs/logo.svg";
import Image from "next/image";
import Link from "next/link";
const AppHeader = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <div className={colorScheme === "dark" ? "dark" : ""}>
      <div className="flex items-center px-4 sm:px-8 py-3 justify-between border-b border-b-gray-200 dark:border-b-dark-300">
        <Image src={logo} width={40} height={40} />
        <Link href="/" passHref>
          <Text component="a" className="font-dancingScript text-4xl font-bold">
            Tuster
          </Text>
        </Link>
        <div className="flex">
          <div className=" mr-4">
            <ActionIcon
              className="border border-gray-200 dark:border-dark-200"
              size="lg"
              variant="light"
            >
              <BsGithub />
            </ActionIcon>
          </div>
          <div>
            <ActionIcon
              size="lg"
              variant="light"
              className="border border-gray-200 dark:border-dark-200"
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
