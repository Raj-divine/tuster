import Image from "next/image";
import Link from "next/link";
import { Text, Button, Space, Badge, SimpleGrid } from "@mantine/core";
import { FaUserGraduate, FaStar, FaDollarSign } from "react-icons/fa";
const Detail = ({ icon, text }) => {
  return (
    <div className="w-16 flex justify-between items-center">
      {icon}
      <Text className="ml-2 tracking-wider cursor-default font-semibold text-lg">
        {text}
      </Text>
    </div>
  );
};

const HomePageTutor = ({ tutor }) => {
  const {
    image,
    firstName,
    lastName,
    description,
    experties,
    totalStudents,
    rating,
    pricing,
    uid,
  } = tutor;
  return (
    <div className="flex flex-col md:flex-row  md:h-64 lg:h-72 xl:h-60 mb-10 overflow-hidden rounded-lg dark:shadow-md shadow bg-slate-50 dark:bg-dark-600">
      <div className="md:w-1/4 h-60 sm:h-[500px] md:h-full relative">
        <Image
          className="object-cover object-center"
          src={image}
          layout="fill"
          alt={`${firstName} ${lastName}`}
        />
      </div>
      <div className="md:w-3/4 h-full flex-col my-4 mx-4 text-lg">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="sm:w-3/4 md:w-2/3 xl:w-1/2">
            <p className="font-bold tracking-wide">{`${firstName} ${lastName}`}</p>
            <div className="w-full mt-2 ">
              <Text lineClamp={4} color="dimmed" className="text-sm leading-4">
                {description}
              </Text>
            </div>
          </div>
          <div className="flex mt-4 sm:mt-0 sm:flex-col justify-evenly">
            <Detail icon={<FaUserGraduate />} text={totalStudents} />
            <Detail icon={<FaStar />} text={rating.toFixed(1)} />
            <Detail icon={<FaDollarSign />} text={`${pricing}/h`} />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-end justify-between w-full  sm:h-24 lg:h-36 xl:h-24 mt-4 sm:mt-0">
          <div className="lg:w-1/2 sm:w-1/2 w-full">
            <SimpleGrid
              breakpoints={[
                { minWidth: 300, cols: 2 },
                { minWidth: 640, cols: 3 },
                { minWidth: 1024, cols: 2 },
                { minWidth: 1280, cols: 3 },
              ]}
            >
              {experties.map((expertise, index) => {
                return (
                  <Badge
                    key={index}
                    className="w-full text-teal-500 bg-teal-100 dark:bg-teal-700 dark:text-teal-200"
                  >
                    {expertise}
                  </Badge>
                );
              })}
            </SimpleGrid>
          </div>
          <div className="flex justify-between sm:justify-end w-full sm:w-1/2 mt-8">
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
            <Button className="bg-teal-400 hover:bg-teal-500 dark:bg-teal-500 dark:hover:bg-teal-600">
              Book now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageTutor;
