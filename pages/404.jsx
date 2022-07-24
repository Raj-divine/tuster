import { Text } from "@mantine/core";
import Link from "next/link";
const NotFoundPage = () => {
  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col w-full h-full items-center justify-center">
        <Text className="text-9xl font-bold">Are you Lost?</Text>
        <div className="mt-10">
          <Link href="/home">
            <a className="text-2xl text-teal-500 hover:underline">
              Back to Home
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
