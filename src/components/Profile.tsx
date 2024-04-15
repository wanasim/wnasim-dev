import Image from "next/image";

export default function Profile() {
  return (
    <div className="relative flex items-end gap-20 px-4 sm:px-8 lg:px-12">
      <div className="group basis-96 relative z-10 max-w-60 aspect-1/1.5 overflow-hidden rounded-bottom hover:scale-110 duration-1000">
        <Image
          width={500}
          height={400}
          alt="Background Image"
          priority={true}
          src="/profile_background.png"
          className=" bg-[length:500px] z-10 bg-[left_top_-200px] object-fill bg-bot blur-[.75px] absolute rounded-full aspect-square mx-auto bottom-0 left-0 right-0"
        />
        <Image
          className=" absolute z-20 bottom-0 left-0 right-0 mx-auto translate-y-[70px] group-hover:translate-y-[60px] duration-500"
          src="/profile_image.png"
          alt="Profile Image"
          width={300}
          height={200}
          priority
        />
      </div>
      <h1 className=" text-7xl inline-flex">
        Software designer, founder, and amateur astronaut.
      </h1>
    </div>
  );
}
