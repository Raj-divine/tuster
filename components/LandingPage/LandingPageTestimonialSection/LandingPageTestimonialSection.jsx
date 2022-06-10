import { Grid, Center, Text, Space } from "@mantine/core";
import LandingPageTestimonial from "../LandingPageTestimonial/LandingPageTestimonial";
import avatar1 from "../../../assets/imgs/testimonila-avatar-1.jpg";
import avatar2 from "../../../assets/imgs/testimonila-avatar-2.jpg";
import avatar3 from "../../../assets/imgs/testimonila-avatar-3.jpg";
import avatar4 from "../../../assets/imgs/testimonila-avatar-4.jpg";
import avatar5 from "../../../assets/imgs/testimonila-avatar-5.jpg";

const testimonialData = [
  {
    name: "Lana",
    username: "@lanapacman",
    text: `Just want to thank you guys at @tuster for the great service.
    everything was on point, the staff was very friendly and the tutors
    were super clear about what they were teaching.`,
    uploadedOn: "23rd May 2022 on twitter",
    image: avatar1,
  },
  {
    name: "Nicholas Nash",
    username: "@nicholasnash",
    text: `I landed a job at google as a software engineer! 
    all thanks to the amazing teachers @tuster. I am deeply in love
     with the way teacher can build your confidence and make you feel like you are in the right place.`,
    uploadedOn: "22nd dec 2021 on twitter",
    image: avatar2,
  },
  {
    name: "Alfred Taylor",
    username: "@itsalfred",
    text: `Can we take a moment to appreciate the teachers @tuster for their hard work and their passion for teaching.`,
    uploadedOn: "2nd may 2022 on facebook",
    image: avatar3,
  },
  {
    name: "jessica",
    username: "@jessiknows",
    text: `Quick shoutout to @tuster for saving me a lot of time 
    and money. Finding tutors for a 1 on 1 mentoring session for
     my son was a nightmare for me, Good thing i found out about @tuster `,
    uploadedOn: "12th feb 2022 on facebook",
    image: avatar4,
  },
  {
    name: "Tina Howard",
    username: "@tinahowaaard",
    text: `ya'll need to try @tuster at least once cuz after that there's
     no going back you'll love the way they teach stuff.`,
    uploadedOn: "19th dec 2021 on twitter",
    image: avatar5,
  },
];
const LandingPageTestimonialSection = () => {
  return (
    <section className="mt-28 w-4/5 my-0 mx-auto">
      <Center>
        <Text className="section-heading">See what others think of us</Text>
      </Center>
      <Space h={100} />
      <Grid grow>
        {testimonialData.map((testimonial, index) => {
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
