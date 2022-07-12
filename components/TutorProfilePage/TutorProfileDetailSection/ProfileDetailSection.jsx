import { Text, Space, Tabs, Badge } from "@mantine/core";
import DetailComponent from "../DetailComponent/DetailComponent";
const ProfilePageDetailSection = ({ tutor }) => {
  const { description, expertise } = tutor;

  return (
    <div className="flex flex-col xl:flex-row 2xl:w-2/3 w-11/12 mt-10 mx-auto">
      <div className="xl:w-[30%] flex flex-col sm:flex-row items-center xl:flex-col lg:mr-10">
        <div className="w-11/12 sm:w-1/2 xl:w-full">
          <div className="flex flex-col text-center p-4 items-center w-full rounded-lg border dark:border-dark-400">
            <Text className="font-semibold text-lg">About Me</Text>
            <Space h={15} />
            <Text color="dimmed">{description}</Text>
          </div>
        </div>

        <div className="h-full mt-4 sm:mt-0 w-11/12 sm:w-1/2 xl:w-full sm:ml-4 xl:mt-4 xl:ml-0">
          <div className="flex flex-col items-center h-full p-4 rounded-lg border dark:border-dark-400">
            <div className="my-0 mx-auto">
              <Text className="font-semibold text-lg">Skills</Text>
            </div>
            <Space h={15} />

            <div className="w-3/4">
              {expertise.map((expertise, index) => {
                return (
                  <Badge
                    key={index}
                    className="w-full text-teal-500 bg-teal-100 dark:bg-teal-900 dark:text-teal-200"
                  >
                    {expertise}
                  </Badge>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="xl:w-[70%] mt-10">
        <Tabs className="w-full h-full" color="teal">
          <Tabs.Tab className="text-base" label="Details">
            <DetailComponent tutor={tutor} />
          </Tabs.Tab>
          <Tabs.Tab className="text-base" label="reviews">
            No Reviews
          </Tabs.Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfilePageDetailSection;
