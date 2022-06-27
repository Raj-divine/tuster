import { Text, Divider } from "@mantine/core";
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
  return (
    <div className="col-span-2 p-8 row-span-1 mt-10 rounded-lg border dark:border-dark-400">
      <SocialTableRow platform={<AiFillInstagram />}>
        @raj_divine_
      </SocialTableRow>
      <SocialTableRow platform={<AiOutlineTwitter />}>
        @raj_divine_
      </SocialTableRow>
      <SocialTableRow platform={<AiFillLinkedin />}>
        @raj_divine_
      </SocialTableRow>
      <SocialTableRow platform={<AiFillFacebook />}>
        @raj_divine_
      </SocialTableRow>
    </div>
  );
};

export default ProfilePageSocial;
