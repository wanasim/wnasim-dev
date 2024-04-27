import clsx from "clsx";
import Image from "next/image";
import image1 from "../../public/zion.png";
import image2 from "../../public/garibaldi.png";
import image3 from "../../public/banff.png";
import image4 from "../../public/iceland.png";
import image5 from "../../public/acadia.png";

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
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map(
          (image, imageIndex) => (
            <div
              key={image.src}
              className={clsx(
                "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-lg sm:w-72 sm:rounded-2xl bg-zinc-800",
                rotations[imageIndex % rotations.length]
              )}
            >
              <Image
                src={image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}
