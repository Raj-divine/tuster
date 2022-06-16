import { Space, Text, Button } from "@mantine/core";
import LandingPageSignUpModal from "../LandingPageSignUpModal/LandingPageSignUpModal";
import { useState } from "react";
import Image from "next/image";
import headerImage from "../../../assets/imgs/landingPageHeaderImage.jpg";
const LandingPageHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openWithLogin, setOpenWithLogin] = useState(false);
  return (
    <header>
      <div className="mt-8 xs:mt-12 sm:mt-20 flex justify-between">
        <div className="xl:w-1/2 ">
          <h1 className="uppercase font-bold text-5xl xs:text-7xl sm:text-8xl">
            Go beyond the
            <Text
              component="span"
              variant="gradient"
              className="font-bold text-5xl xs:text-7xl sm:text-8xl block"
              gradient={{ from: "#38D9A9", to: "#12B886", deg: 45 }}
            >
              horizon.
            </Text>
          </h1>
          <Space h={20} />
          <Text
            color="dimmed"
            component="h2"
            className="uppercase font-raleway text-xl xs:text-2xl"
          >
            Bringing the best out of you
          </Text>
          <Space h={20} />

          <div className="flex">
            <Button
              size="md"
              radius="md"
              className="bg-teal-500 hover:bg-teal-600 font-normal text-lg tracking-wider dark:text-teal-100"
              onClick={() => {
                setIsModalOpen(true);
                setOpenWithLogin(false);
              }}
            >
              Let&apos;s start
            </Button>
            <Space w={20} />
            <Button
              size="md"
              radius="md"
              color="teal"
              variant="outline"
              className="text-teal-500 border-teal-500  text-lg tracking-wider font-normal"
              onClick={() => {
                setOpenWithLogin(true);
                setIsModalOpen(true);
              }}
            >
              Login?
            </Button>
          </div>
        </div>
        <div className="rounded-blob hidden xl:block w-1/2 2xl:w-2/5 overflow-hidden shadow-lg">
          <Image
            placeholder="blur"
            src={headerImage}
            layout="responsive"
            size="50vw"
            alt="boy sitting on a rock"
          />
        </div>
      </div>
      <LandingPageSignUpModal
        closeModal={() => setIsModalOpen(false)}
        opened={isModalOpen}
        openWithLogin={openWithLogin}
      />
    </header>
  );
};

export default LandingPageHeader;
