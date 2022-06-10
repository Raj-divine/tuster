import { Space, Text } from "@mantine/core";
const LandingPageStats = ({ title, amount }) => {
  return (
    <div className="flex flex-col text-center items-center justify-center">
      <Text className="text-3xl md:text-5xl  font-semibold">{title}</Text>
      <Space h={30} />
      <Text
        variant="gradient"
        gradient={{
          from: "#38D9A9",
          to: "#5C7CFA",
          deg: 45,
        }}
        className="tracking-wide text-4xl md:text-5xl font-bold"
      >
        {amount}+
      </Text>
    </div>
  );
};

export default LandingPageStats;
