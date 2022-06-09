import { Text, Center, Box, SimpleGrid } from "@mantine/core";
import Feature from "../Feature/Feature";
const FeatureSection = ({ colorScheme }) => {
  return (
    <section className={colorScheme === "dark" ? "dark" : ""}>
      <div>
        <Center className="mt-20">
          <Text
            className="font-raleway font-medium text-3xl tracking-wider border-b-2 pb-2 border-teal-400"
            component="h4"
          >
            We will make you fall in love with learning
          </Text>
        </Center>
        <Box>
          <SimpleGrid cols={3}>
            <Feature colorScheme={colorScheme} />
            <Feature colorScheme={colorScheme} />
            <Feature colorScheme={colorScheme} />
          </SimpleGrid>
        </Box>
      </div>
    </section>
  );
};

export default FeatureSection;
