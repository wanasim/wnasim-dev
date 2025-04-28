import clsx from 'clsx';
import Image from 'next/image';

const Timeline = ({ companies }: any) => {
  return (
    <div className="mx-8 flex flex-col border-l-2 border-primary-dark/40 lg:max-w-[75%]">
      {companies.map((company: any, index: any) => (
        <div key={index} className="relative flex notfirst:mt-28">
          <div
            className={clsx(
              'absolute -left-[2.6rem] top-0 z-10 flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-md ring-1 ring-primary-dark/20 ring-offset-4 ring-offset-black',
              company.background
            )}
          >
            <Image
              src={company.logo}
              alt=""
              className={clsx(
                'h-2/3 w-2/3 overflow-visible rounded-full',
                company.imageSize
              )}
            />
          </div>
          <div className="z-10 ml-32">
            <h2 className="text-2xl font-extrabold text-white">
              {company.name}
            </h2>
            <h5 className="text-sm text-gray-400">{company.year}</h5>
            <p className="text-gray-400">
              lorem ip sum I spent the next few summers indoors working on a
              rocket design, while I recovered from the multiple surgeries it
              took to fix my badly broken legs. It took nine iterations, but
              when I was 15 I sent my dad&apos;s Blackberry into orbit and was
              able to transmit a photo back down to our family computer from
              space.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
