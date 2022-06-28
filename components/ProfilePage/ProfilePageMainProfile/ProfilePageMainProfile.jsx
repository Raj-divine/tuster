import { Center, Text, SimpleGrid, Badge } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";

const ProfilePageMainProfile = () => {
  const [user] = useLocalStorage({ key: "user-data" });
  return (
    <div className="lg:col-span-1 lg:row-span-2 min-h-[600px] xl:col-span-1 xl:row-span-2 2xl:col-span-1 2xl:row-span-2 mt-10 rounded-lg shadow-xl border dark:border-dark-400">
      <div className="flex h-full flex-col items-center justify-between">
        <div className="flex w-full flex-col items-center">
          <div className="mt-8">
            <Center className="rounded-full bg-teal-500 h-28 w-28 text-white text-3xl">
              {user.firstName[0].toUpperCase()}
              {user.lastName[0].toUpperCase()}
            </Center>
          </div>
          <div className="mt-4 text-center w-11/12">
            <Text className="text-2xl font-semibold">
              {user.firstName} {user.lastName}
            </Text>
            <Text className="text-sm mt-2" color="dimmed">
              (+91) {user.phone}
            </Text>
            <Text className="text-sm mt-2" color="dimmed">
              {user.email}
            </Text>
            <Text className="text-sm mt-2" color="dimmed">
              {user.address}
            </Text>
          </div>
        </div>
        <div className="w-4/5 rounded-lg border mb-8 dark:border-dark-400">
          <div className="p-4 w-full">
            <Text className="mb-4">Your interests:</Text>
            <SimpleGrid cols={2}>
              {user.subjects.map((item, index) => {
                return (
                  <Badge
                    key={`${item}${index}`}
                    color="teal"
                    className="w-full"
                  >
                    {item}
                  </Badge>
                );
              })}
            </SimpleGrid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageMainProfile;
