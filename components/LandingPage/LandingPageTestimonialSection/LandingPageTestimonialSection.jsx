import { Grid, Center, Text, Space } from "@mantine/core";
import LandingPageTestimonial from "../LandingPageTestimonial/LandingPageTestimonial";
import { TESTIMONIAL_DATA } from "../../../FakeData";
const LandingPageTestimonialSection = () => {
  return (
    <section className="mt-28 w-4/5 my-0 mx-auto">
      <Center>
        <Text className="section-heading">See what others think of us</Text>
      </Center>
      <Space h={100} />
      <Grid grow>
        {TESTIMONIAL_DATA.map((testimonial, index) => {
          return (
            <Grid.Col key={index} md={6} lg={4}>
              <LandingPageTestimonial {...testimonial} />
            </Grid.Col>
          );
        })}
      </Grid>
    </section>
  );
};
export default LandingPageTestimonialSection;
