import Image from "next/image";
const BookedSectionCard = ({ tutor }) => {
  const { image, firsName: firstName, lastName } = tutor;
  return (
    <div className="flex flex-col md:flex-row  md:h-64 lg:h-72 xl:h-60 mb-10 overflow-hidden rounded-lg dark:shadow-md shadow bg-slate-50 dark:bg-dark-600">
      <div className="md:w-1/4 h-60 sm:h-[500px] md:h-full relative">
        <Image
          className="object-cover object-center"
          src={image}
          layout="fill"
          alt={`${firstName} ${lastName}`}
        />
      </div>
    </div>
  );
};

export default BookedSectionCard;
