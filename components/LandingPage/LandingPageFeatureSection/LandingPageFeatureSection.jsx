import { Text, Center, SimpleGrid, Space } from "@mantine/core";
import Feature from "../Feature/Feature";
import featureImage1 from "../../../assets/imgs/featureImage1.png";
import featureImage2 from "../../../assets/imgs/featureImage2.png";
import featureImage3 from "../../../assets/imgs/featureImage3.png";

const featureData = [
  {
    image: featureImage1,
    heading: "Be more confident than ever before",
    description:
      "Our learning platform is designed to help you be more confident than ever before. Our Teachers have a unique way of teaching that will help you build confidence.",
    blob: "blob-2",
    alt: "girl showing graphs",
  },
  {
    image: featureImage2,
    heading: "Achieve your goals",
    description:
      "Our teachers are trained to help you achieve your goals. We will help you achieve your goals.",
    blob: "blob-3",
    alt: "girl acting as a super hero",
  },
  {
    image: featureImage3,
    heading: "be more observant",
    description:
      "In this era, being an observant and creative person is very important. We will make you a better observant and creative person.",
    blob: "blob-4",
    alt: "girl observing something",
  },
];

const FeatureSection = () => {
  return (
    <section className="px-8 sm:px-24 lg:px-24">
      <Center className="mt-32 text-center">
        <Text
          className="font-raleway font-medium cursor-default text-2xl sm:text-3xl tracking-wide border-b-2 pb-2 border-teal-400 hover:tracking-wider transition-all duration-300"
          component="h4"
        >
          We will make you fall in love with learning
        </Text>
      </Center>
      <Space h={100} />
      <Center>
        <SimpleGrid
          breakpoints={[
            { minWidth: 1200, cols: 3 },
            { minWidth: 768, cols: 2 },
          ]}
          cols={1}
          spacing={70}
        >
          {featureData.map((feature, index) => {
            return <Feature key={index} blob="blob-3" {...feature} />;
          })}
        </SimpleGrid>
      </Center>
    </section>
  );
};

export default FeatureSection;
