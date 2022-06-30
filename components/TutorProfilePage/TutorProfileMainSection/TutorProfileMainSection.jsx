import Image from "next/image";
import { Button, Center, Space, Text } from "@mantine/core";
import StarRating from "../../StarRating/StarRating";
import { BsBookmark } from "react-icons/bs";
const TutorProfileMainSection = ({ tutor }) => {
  const {
    firsName: firstName,
    lastName,
    totalStudents,
    rating,
    pricing,
    image,
  } = tutor;

  return (
    <div className="grid w-3/4 mt-10 mx-auto grid-cols-4">
      <div className="col-span-1">
        <div className="relative w-1/2 my-0 mx-auto h-36 rounded-full overflow-hidden shadow-xl">
          <Image
            src={image}
            layout="fill"
            className="object-cover object-center"
            alt={`${firstName} ${lastName}`}
          />
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex flex-col h-full justify-center">
          <div className="flex items-center">
            <Text className="text-3xl font-light">
              {firstName} {lastName}
            </Text>
            <Button
              className="ml-4 px-2 py-1 text-teal-400 text-xs border-teal-400"
              variant="outline"
              size="xs"
            >
              Book now
            </Button>
          </div>
          <Space h={20} />
          <div className="flex">
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
      <div className="col-span-1">
        <div className="flex cursor-pointer h-full items-center justify-center">
          <BsBookmark size={30} />
        </div>
      </div>
    </div>
  );
};

export default TutorProfileMainSection;
