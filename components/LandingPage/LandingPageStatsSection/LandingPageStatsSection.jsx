import { Text, Center, Grid, Space } from "@mantine/core";
import LandingPageStats from "../LandingPageStats/LandingPageStats";
const LandingPageStatsSection = () => {
  return (
    <section className="mt-28">
      <Center>
        <Text className="section-heading">Our accomplishments so far</Text>
      </Center>
      <Space h={100} />
      <Grid>
        <Grid.Col className="lg:mb-32 mb-0" xl={12}>
          <LandingPageStats title="Total five star ratings" amount={40000} />
        </Grid.Col>
        <Grid.Col className="mt-10 lg:mt-0" span={12} md={6} lg={6}>
          <LandingPageStats title="Total students" amount={50000} />
        </Grid.Col>
        <Grid.Col className="mt-10 lg:mt-0" span={12} md={6} lg={6}>
          <LandingPageStats title="Total teachers" amount={20000} />
        </Grid.Col>
        <Grid.Col className="lg:mt-32 mt-10" xl={12}>
          <LandingPageStats title="Total hours of mentoring" amount={3000000} />
        </Grid.Col>
      </Grid>
    </section>
  );
};

export default LandingPageStatsSection;
