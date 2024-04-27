import Image from "next/image";

export default function Profile() {
  return (
    <div className="relative flex items-end flex-wrap gap-16 px-4 sm:px-8 lg:px-12">
      <div className="group basis-96 xl:max-w-64 lg:max-w-56 max-w-52 grow relative z-10 aspect-1/1.2 overflow-hidden rounded-bottom hover:scale-110 duration-1000">
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

      <div className="max-w-2xl">
        <h1 className="  font-bold text-zinc-100 text-4xl text-balance sm:text-5xl inline-flex">
          Software engineer, blockchain enthusiast, and
          crypto trader.
        </h1>
        <p className="grow mt-6 text-lg  text-zinc-400">
          I&apos;m Walid, a full-stack software engineer
          based in Arlington, Va. I currently work as a
          senior engineer and team lead Mastercard where we
          focus the founder and CEO of Planetaria, where we
          develop technologies that empower regular people
          to explore space on their own terms.
        </p>
      </div>
    </div>
  );
}
