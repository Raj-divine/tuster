import { Text, Space, Tabs, Badge } from "@mantine/core";
import DetailComponent from "../DetailComponent/DetailComponent";
const ProfilePageDetailSection = ({ tutor }) => {
  const { description, expertise } = tutor;

  return (
    <div className="grid w-3/4 mt-10 mx-auto gri grid-rows-2 grid-cols-4 gap-y-3">
      <div className="col-span-1 row-span-1">
        <div className="flex flex-col text-center p-4 items-center w-full rounded-lg border dark:border-dark-400">
          <Text className="font-semibold text-lg">About Me</Text>
          <Space h={15} />
          <Text color="dimmed">{description}</Text>
        </div>
      </div>
      <div className="col-start-1  row-start-2 col-span-1 row-span-1 ">
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
      <div className="col-span-3 row-span-2 ml-20">
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
