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
    <div className="col-span-2 p-8 row-span-1 mt-10 rounded-lg border dark:border-dark-400">
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
  );
};

export default ProfilePageSocial;
