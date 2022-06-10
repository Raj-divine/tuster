import { Card, Text, Highlight } from "@mantine/core";
import Image from "next/image";
import avatar1 from "../../../assets/imgs/testimonila-avatar-1.jpg";
const LandingPageTestimonial = ({
  name,
  username,
  text,
  uploadedOn,
  image,
}) => {
  return (
    <Card className="shadow-inner p-7 rounded-xl dark:shadow-dark-800 bg-gray-50 dark:bg-dark-600 hover:-translate-y-3 transition-transform cursor-default duration-300">
      <div className="flex">
        <div className="w-10 h-10">
          <Image
            className="rounded-md"
            src={image}
            layout="responsive"
            sizes="10vw"
          />
        </div>
        <div className="ml-4">
          <Text component="p" className="font-semibold">
            {name}
          </Text>
          <Text
            component="p"
            color="dimmed"
            className="italic text-xs font-semibold"
          >
            {username}
          </Text>
        </div>
      </div>
      <div className="mt-6 ">
        <Highlight
          className="dark:text-dark-200 font-raleway tracking-wide text-sm"
          component="p"
          highlight="@tuster"
          highlightStyles={(theme) => ({
            backgroundImage: theme.fn.linearGradient(
              45,
              theme.colors.teal[4],
              theme.colors.indigo[5]
            ),
            fontWeight: 700,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "montserrat",
          })}
        >
          {text}
        </Highlight>
      </div>
      <div>
        <Text
          color="dimmed"
          className="dark:text-dark-300 text-xs font-bold mt-5"
        >
          {uploadedOn}
        </Text>
      </div>
    </Card>
  );
};

export default LandingPageTestimonial;
