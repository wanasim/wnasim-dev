import Photos from "@/components/Photos";
import Profile from "@/components/Profile";
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
      <Profile />

      <div className="px-4 sm:px-8 lg:px-12">
        <div className="px-8 ">
          <div className="mt-32">
            <Photos />
          </div>
        </div>
      </div>
    </>
  );
}
