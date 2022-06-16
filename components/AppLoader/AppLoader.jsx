import { Loader } from "@mantine/core";

const AppLoader = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Loader variant="dots" />
    </div>
  );
};

export default AppLoader;
