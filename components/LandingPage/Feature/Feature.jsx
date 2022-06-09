import Image from "next/image";
import { Space, Text } from "@mantine/core";
const Feature = ({ image, heading, description, blob, alt }) => {
  return (
    <div className="flex flex-col items-center ">
      <div className="w-52 h-52 relative ">
        <div
          className={`absolute ${blob} inset-x-0 top-6 bottom-6 -z-10 bg-gradient-to-tr from-teal-200 to-teal-800`}
        ></div>
        <Image
          className="hover:scale-105 transition-transform duration-300"
          src={image}
          objectFit="contain"
          alt={alt}
        />
      </div>
      <div className="flex flex-col items-center text-center">
        <Text className="text-teal-600 dark:text-teal-400 text-xl font-medium font-raleway tracking-wide">
          {heading}
        </Text>
        <Space h={20} />

        <Text
          className="text-base sm:w-3/4 lg:w-2/3"
          color="dimmed"
          component="p"
        >
          {description}
        </Text>
      </div>
    </div>
  );
};

export default Feature;
