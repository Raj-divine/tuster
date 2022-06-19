import albertEinstein from "../../../assets/imgs/albertEinstein.png";
import Image from "next/image";
import { Blockquote } from "@mantine/core";

const HomePageHeader = () => {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-center xl:justify-between bg-slate-50 dark:bg-dark-600 ">
      <div className="w-2/3 sm:w-1/2 xl:w-2/5 2xl:w-1/3">
        <Image
          sizes="50vw"
          src={albertEinstein}
          alt="Albert Einstein"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div className="mt-4 xl:w-1/2">
        <Blockquote
          cite="- Albert Einstein"
          classNames={{
            body: "text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl",
          }}
        >
          Intellectual growth should commence at birth and ease only at death
        </Blockquote>
      </div>
    </header>
  );
};

export default HomePageHeader;
