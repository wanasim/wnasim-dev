import clsx from "clsx";
import Image from "next/image";

const Timeline = ({ companies }: any) => {
  return (
    <div className="flex flex-col border-l-2 border-zinc-700/40 mx-8 lg:max-w-[75%]">
      {companies.map((company: any, index: any) => (
        <div
          key={index}
          className="relative notfirst:mt-28 flex"
        >
          <div
            className={clsx(
              "absolute flex items-center justify-center -left-[2.6rem] top-0 h-20 w-20 bg-zinc-200 ring-1 ring-offset-4 ring-offset-black ring-zinc-300/20 rounded-full shadow-md z-10",
              company.background
            )}
          >
            <Image
              src={company.logo}
              alt=""
              className={clsx(
                "rounded-full overflow-visible w-2/3 h-2/3",
                company.imageSize
              )}
            />
          </div>
          <div className="z-10 ml-32">
            <h2 className=" font-extrabold text-2xl">
              {company.name}
            </h2>
            <h5 className="text-sm text-gray-500">
              {company.year}
            </h5>
            <p>
              lorem ip sum I spent the next few summers
              indoors working on a rocket design, while I
              recovered from the multiple surgeries it took
              to fix my badly broken legs. It took nine
              iterations, but when I was 15 I sent my dad’s
              Blackberry into orbit and was able to transmit
              a photo back down to our family computer from
              space.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
