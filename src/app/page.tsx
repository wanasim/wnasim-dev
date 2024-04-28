import Photos from "@/components/Photos";
import Values from "@/components/Values";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { TypewriterEffect } from "@/components/ui/TypewriterEffect";
import Image from "next/image";

export default function Home() {
  const words = [
    { text: "A" },
    { text: "healthy" },
    { text: "disregard" },
    { text: "for" },
    { text: "the" },
    {
      text: "impossible.",
      className: "text-sky-500 italic",
    },
  ];
  return (
    <>
      <div className="px-4 sm:px-8 lg:px-12">
        <div className="px-8 ">
          <div className="relative top-20">
            <Photos />
          </div>

          <div className="relative top-44 ">
            <h3 className="mx-auto text-center text-zinc-400 font-bold text-2xl mb-4 ">
              My motto
            </h3>
            <TypewriterEffect words={words} />
            <p className=" text-balance text-center mt-10 text-lg md:text-xl text-zinc-400">
              This is going to be text about how I love a
              good challenge. passion from engineering stems
              from the creative process needed to solve a
              difficult problem. For me its not necessarily
              about just getting to outcome..its about
              enjoying the journey to get there. I enjoy
              tinkering and breaking. I love collaborating
              with my team. And sipping that coffee while I
              strategize. Its the culmination of all this
              that drives my passion for engineering.
              <span className=" text-inherit">
                Here are my key values on what pushes me
                seek out the impossible and to achieve
                results:
              </span>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>

          <Values />
        </div>
      </div>
    </>
  );
}
