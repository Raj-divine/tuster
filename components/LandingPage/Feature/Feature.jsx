import Image from "next/image";
import FeatureImage1 from "../../../assets/imgs/featureImage1.png";
import { Center, Text } from "@mantine/core";
const Feature = ({ colorScheme }) => {
  return (
    <div className={colorScheme === "dark" ? "dark" : ""}>
      <div className="flex flex-col items-center">
        <div className=" w-52 h-52">
          <Image src={FeatureImage1} objectFit="contain" />
        </div>
        <div>
          <Text>Be more confident then ever before</Text>
          <Text component="p">
            Our teachers make sure you are not just reading books all the time
            they will help you building confidence
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Feature;
