import Image from "next/image";
import { Space, Text } from "@mantine/core";
const Feature = ({ image, heading, description }) => {
  return (
    <div className="flex flex-col items-center ">
      <div className=" w-52 h-52">
        <Image src={image} objectFit="contain" />
      </div>
      <div className="flex flex-col items-center text-center">
        <Text className="text-teal-600 dark:text-teal-400 text-xl font-medium font-raleway tracking-wide">
          {heading}
        </Text>
        <Space h={20} />

        <Text className="text-base w-2/3" color="dimmed" component="p">
          {description}
        </Text>
      </div>
    </div>
  );
};

export default Feature;
