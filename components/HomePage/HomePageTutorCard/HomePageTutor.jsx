import Image from "next/image";
import tutor from "../../../assets/imgs/tutor.jpg";
const HomePageTutor = () => {
  return (
    <div className="flex w-2/3 h-72 mt-10 overflow-hidden rounded-lg dark:shadow-md shadow bg-slate-50 dark:bg-dark-600">
      <div className="w-1/4 h-full relative">
        <Image className="object-cover" src={tutor} layout="fill" alt="Tutor" />
      </div>
      <div className="w-3/4 h-full flex">
        <div className="w-1/2">
          <p>Mr. Raj Kushwaha</p>
          <p className="h-1/3 text-ellipsis whitespace-pre-wrap  w-full">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            ipsam ex labore illo error perspiciatis facere blanditiis ea
            similique quidem optio explicabo, modi officiis dolorum at iure
            veniam amet ipsa!
          </p>
        </div>
        <div className="w-1/2">this is another text</div>
      </div>
    </div>
  );
};

export default HomePageTutor;
