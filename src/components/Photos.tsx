import clsx from 'clsx';
import image1 from '../../public/zion.png';
import image2 from '../../public/garibaldi.png';
import image3 from '../../public/banff.png';
import image4 from '../../public/iceland.png';
import image5 from '../../public/acadia.png';
import { DirectionAwareHover } from './ui/DirectionalAwareHover';

export default function Photos() {
  let rotations = [
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    'rotate-2',
    '-rotate-2',
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="flex justify-center gap-5 overflow-visible py-4 sm:gap-8">
        {[
          {
            image: '/zion.png',
            heading: 'Zion National Park',
            subheading: 'Utah, USA',
          },
          {
            image: '/garibaldi.png',
            heading: 'Garibaldi Park',
            subheading: 'British Columbia, Canada',
          },
          {
            image: '/banff.png',
            heading: 'Banff National Park',
            subheading: 'Alberta, Canada',
          },
          {
            image: '/iceland.png',
            heading: 'Diamond Beach',
            subheading: 'near Jökulsárlón, Iceland',
          },
          {
            image: '/acadia.png',
            heading: 'Acadia National Park',
            subheading: 'Maine, USA',
          },
        ].map(({ image, heading, subheading }, imageIndex) => (
          <div
            key={image}
            className={clsx(
              'relative aspect-[8.5/10] w-44 flex-none overflow-hidden rounded-lg bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <DirectionAwareHover
              imageUrl={image}
              rotation={rotations[imageIndex % rotations.length]}
              imageClassName="absolute inset-0 h-full w-full object-cover"
            >
              <p className="text-base font-bold md:text-xl">{heading}</p>
              <p className="text-xs font-normal md:text-sm">{subheading}</p>
            </DirectionAwareHover>
          </div>
        ))}
      </div>
    </div>
  );
}
