import { Text, Divider } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
const SocialTableRow = ({ children, platform }) => {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <Text color="dimmed" className="text-4xl">
          {platform}
        </Text>
        <Text color="dimmed" className="text-lg font-semibold">
          {children}
        </Text>
      </div>
      <Divider className="mb-4" />
    </>
  );
};

const ProfilePageSocial = () => {
  const [user] = useLocalStorage({ key: "user-data" });

  const { instagram, linkedin, twitter, facebook } = user.socials;

  return (
    <div className="lg:col-span-1 lg:row-span-1 xl:col-span-1 xl:row-span-1 2xl:col-span-2 2xl:row-span-1 p-8  xl:mt-10 rounded-lg border dark:border-dark-400">
      <div className="flex flex-col justify-between">
        <SocialTableRow platform={<AiFillInstagram />}>
          {instagram ? instagram : "Not provided"}
        </SocialTableRow>
        <SocialTableRow platform={<AiOutlineTwitter />}>
          {twitter ? twitter : "Not provided"}
        </SocialTableRow>
        <SocialTableRow platform={<AiFillLinkedin />}>
          {linkedin ? linkedin : "Not provided"}
        </SocialTableRow>
        <SocialTableRow platform={<AiFillFacebook />}>
          {facebook ? facebook : "Not provided"}
        </SocialTableRow>
      </div>
    </div>
  );
};

export default ProfilePageSocial;
