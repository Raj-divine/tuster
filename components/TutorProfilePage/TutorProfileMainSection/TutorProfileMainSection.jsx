import Image from "next/image";
import { Text, Button, Space } from "@mantine/core";
import StarRating from "../../StarRating/StarRating";
import { BsBookmark } from "react-icons/bs";
const TutorProfileMainSection = ({ tutor }) => {
  const { firstName, lastName, totalStudents, rating, pricing, image } = tutor;
  return (
    <div className="flex w-3/4 mt-9 mx-auto h-72">
      <div className="w-1/3">
        <div className="w-3/4 h-full relative rounded-lg overflow-hidden shadow-xl">
          <Image
            className="object-cover object-center"
            src={image}
            layout="fill"
            alt={`${firstName} ${lastName}`}
          />
        </div>
      </div>
      <div className="flex flex-col w-1/3">
        <Text
          className="text-3xl font-medium tracking-wide font-raleway"
          component="h2"
        >
          {firstName} {lastName}
        </Text>
        <div className="h-full mt-4 flex flex-col justify-around">
          <div className=" flex items-center">
            <Text
              className="text-xl font-semibold tracking-wide"
              variant="gradient"
              gradient={{ from: "indigo", to: "#20C997", deg: 45 }}
            >
              {rating}
            </Text>
            <Space w={10} />

            <StarRating rating={rating} />
          </div>
          <div className="flex">
            <Text
              className="text-xl font-semibold tracking-wide"
              variant="gradient"
              gradient={{ from: "indigo", to: "#20C997", deg: 45 }}
            >
              ${pricing}
            </Text>
            <Space w={10} />

            <Text className="text-lg font-semibold tracking-wide">
              Per Hour
            </Text>
          </div>
          <div className="flex">
            <Text
              className="text-xl font-semibold tracking-wide"
              variant="gradient"
              gradient={{ from: "indigo", to: "#20C997", deg: 45 }}
            >
              {totalStudents}
            </Text>
            <Space w={10} />
            <Text className="text-lg font-semibold tracking-wide">
              Students Taught
            </Text>
          </div>
          <div>
            <Button
              component="a"
              className="bg-teal-400 hover:bg-teal-500 dark:hover:bg-teal-600"
            >
              Book now
            </Button>
          </div>
        </div>
      </div>
      <div className="w-1/3 flex justify-end">
        <BsBookmark className="cursor-pointer" size={25} />
      </div>
    </div>
  );
};

export default TutorProfileMainSection;
