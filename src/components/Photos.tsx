import clsx from "clsx";
import image1 from "../../public/zion.png";
import image2 from "../../public/garibaldi.png";
import image3 from "../../public/banff.png";
import image4 from "../../public/iceland.png";
import image5 from "../../public/acadia.png";
import { DirectionAwareHover } from "./ui/DirectionalAwareHover";

export default function Photos() {
  let rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "rotate-2",
    "-rotate-2",
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 py-4 sm:gap-8 overflow-visible">
        {[
          {
            image: image1,
            heading: "Zion National Park",
            subheading: "Utah, USA",
          },
          {
            image: image2,
            heading: "Garibaldi Park",
            subheading: "British Columbia, Canada",
          },
          {
            image: image3,
            heading: "Banff National Park",
            subheading: "Alberta, Canada",
          },
          {
            image: image4,
            heading: "Diamond Beach",
            subheading: "near Jökulsárlón, Iceland",
          },
          {
            image: image5,
            heading: "Acadia National Park",
            subheading: "Maine, USA",
          },
        ].map(
          ({ image, heading, subheading }, imageIndex) => (
            <div
              key={image.src}
              className={clsx(
                "relative aspect-[8.5/10] w-44 flex-none overflow-hidden rounded-lg sm:w-72 sm:rounded-2xl bg-zinc-800",
                rotations[imageIndex % rotations.length]
              )}
            >
              <DirectionAwareHover
                imageUrl={image}
                rotation={
                  rotations[imageIndex % rotations.length]
                }
                imageClassName="absolute inset-0 h-full w-full object-cover"
              >
                <p className="font-bold text-xl">
                  {heading}
                </p>
                <p className="font-normal text-sm">
                  {subheading}
                </p>
              </DirectionAwareHover>
            </div>
          )
        )}
      </div>
    </div>
  );
}
