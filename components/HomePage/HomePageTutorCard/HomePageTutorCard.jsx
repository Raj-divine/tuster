import Image from "next/image";
import { Text, Button, Space, Badge, SimpleGrid } from "@mantine/core";
import { FaUserGraduate, FaStar, FaDollarSign } from "react-icons/fa";
import image from "../../../assets/imgs/tutor.jpg";
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
  // const {
  //   image,
  //   firstName,
  //   lastName,
  //   description,
  //   experties,
  //   totalStudents,
  //   rating,
  //   pricing,
  // } = tutor;
  return (
    // <div className="flex w-2/3 h-60 mt-10 overflow-hidden rounded-lg dark:shadow-md shadow bg-slate-50 dark:bg-dark-600">
    //   <div className="w-1/4 h-full relative">
    //     <Image
    //       className="object-cover"
    //       src={image}
    //       layout="fill"
    //       alt={`${firstName} ${lastName}`}
    //     />
    //   </div>
    //   <div className="w-3/4 h-full flex justify-between mt-4 ml-4 text-lg">
    //     <div className="w-1/2 flex flex-col justify-between">
    //       <div>
    //         <p className="font-bold tracking-wide">{`${firstName} ${lastName}`}</p>
    //         <div className="w-full mt-2 ">
    //           <Text lineClamp={4} color="dimmed" className="text-sm leading-4">
    //             {description}
    //           </Text>
    //         </div>
    //       </div>
    //       <div className="mb-10">
    //         <SimpleGrid cols={3}>
    //           {experties.map((expertise) => {
    //             return (
    //               <Badge className="w-full text-teal-500 bg-teal-100 dark:bg-teal-700 dark:text-teal-200">
    //                 {expertise}
    //               </Badge>
    //             );
    //           })}
    //         </SimpleGrid>
    //       </div>
    //     </div>
    //     <div className="w-1/2 flex flex-col justify-between items-end mr-6">
    //       <div>
    //         <Detail icon={<FaUserGraduate />} text={totalStudents} />
    //         <Detail icon={<FaStar />} text={rating.toFixed(1)} />
    //         <Detail icon={<FaDollarSign />} text={`${pricing}/h`} />
    //       </div>

    //       <div className="mb-10 flex">
    //         <Button
    //           className="text-teal-400 hover:bg-teal-50 dark:text-white dark:hover:bg-dark-500"
    //           variant="subtle"
    //         >
    //           View more
    //         </Button>
    //         <Space w={10} />
    //         <Button className="bg-teal-400 hover:bg-teal-500 dark:bg-teal-500 dark:hover:bg-teal-600">
    //           Book now
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex w-2/3 h-60 mt-10 overflow-hidden rounded-lg dark:shadow-md shadow bg-slate-50 dark:bg-dark-600">
      <div className="w-1/4 h-full relative">
        <Image
          className="object-cover"
          src={image}
          layout="fill"
          alt={`${"firstName"} ${"lastName"}`}
        />
      </div>
      <div className="w-3/4 h-full flex justify-between mt-4 ml-4 text-lg">
        <div className="w-1/2 flex flex-col justify-between">
          <div>
            <p className="font-bold tracking-wide">{`${"firstName"} ${"lastName"}`}</p>
            <div className="w-full mt-2 ">
              <Text lineClamp={4} color="dimmed" className="text-sm leading-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                nihil nam beatae fugiat porro nisi. Tempore necessitatibus id
                aut magnam libero ipsam assumenda sapiente, nobis debitis
                dolores omnis ea officia.
              </Text>
            </div>
          </div>
          <div className="mb-10">
            <SimpleGrid cols={3}>
              <Badge className="w-full text-teal-500 bg-teal-100 dark:bg-teal-700 dark:text-teal-200">
                maths
              </Badge>
              <Badge className="w-full text-teal-500 bg-teal-100 dark:bg-teal-700 dark:text-teal-200">
                maths
              </Badge>{" "}
              <Badge className="w-full text-teal-500 bg-teal-100 dark:bg-teal-700 dark:text-teal-200">
                maths
              </Badge>{" "}
              <Badge className="w-full text-teal-500 bg-teal-100 dark:bg-teal-700 dark:text-teal-200">
                maths
              </Badge>{" "}
              <Badge className="w-full text-teal-500 bg-teal-100 dark:bg-teal-700 dark:text-teal-200">
                maths
              </Badge>
            </SimpleGrid>
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-between items-end mr-6">
          <div>
            <Detail icon={<FaUserGraduate />} text={5} />
            <Detail icon={<FaStar />} text={4.5} />
            <Detail icon={<FaDollarSign />} text={`${"2"}/h`} />
          </div>

          <div className="mb-10 flex">
            <Button
              className="text-teal-400 hover:bg-teal-50 dark:text-white dark:hover:bg-dark-500"
              variant="subtle"
            >
              View more
            </Button>
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
