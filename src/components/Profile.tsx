import { MailIcon } from 'lucide-react';
import Image from 'next/image';
import SocialLink from './SocialLink';
import {
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
  XIcon,
} from './ui/SocialIcons';
import { FileIcon } from '@radix-ui/react-icons';

export default function Profile() {
  return (
    <div className="relative flex flex-wrap items-end gap-8">
      <div className="relative flex h-32 w-32 items-end justify-center">
        <Image
          src="/avatar_profile.jpg"
          alt=""
          width={400}
          height={400}
          className="flex-0 absolute z-30 flex h-28 w-28 rounded-full bg-zinc-800 object-cover ring-1 ring-zinc-300/20 ring-offset-2 ring-offset-black blur-[.75] duration-200 hover:h-32 hover:w-32"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-balance text-4xl font-bold tracking-wide text-white">
          Walid Nasim
        </h1>
        <h2 className="text-balance text-2xl font-bold tracking-wide text-gray-400">
          Software Engineer
        </h2>
        <div className="flex gap-2">
          <SocialLink href="https://x.com/n96344" icon={XIcon}></SocialLink>
          <SocialLink
            href="https://www.instagram.com/wherezzwaldo/"
            icon={InstagramIcon}
          ></SocialLink>
          <SocialLink
            href="https://github.com/wanasim"
            icon={GitHubIcon}
          ></SocialLink>
          <SocialLink
            href="https://linkedin.com/in/walid-nasim"
            icon={LinkedInIcon}
          ></SocialLink>
          <SocialLink
            href="mailto:walid.nasim@wnasim.dev"
            icon={MailIcon}
          ></SocialLink>
          <SocialLink
            href="/wnasim_resume.pdf"
            icon={FileIcon}
            customStyle={true}
            download="wnasim_resume.pdf"
          ></SocialLink>
        </div>
      </div>

      {/* <div className="group relative z-10 aspect-1/1.2 max-w-64 grow basis-96 overflow-hidden rounded-bottom duration-1000 hover:scale-110 lg:max-w-72 xl:max-w-80"> */}
      {/* <Image
          width={500}
          height={400}
          alt="Background Image"
          priority={true}
          src="/profile_background.png"
          className=" bg-[length:500px] z-10 bg-[left_top_-200px] object-fill bg-bot blur-[.75px] absolute rounded-full aspect-square mx-auto bottom-0 left-0 right-0"
        />
        <Image
          className=" absolute z-20 bottom-0 left-0 right-0 mx-auto translate-y-[70px] group-hover:translate-y-[60px] duration-500"
          src="/profile2.png"
          alt="Profile Image"
          width={300}
          height={200}
          priority
        /> */}
      {/* </div> */}

      {/* <div className="max-w-2xl">
        <h1 className="inline-flex text-balance text-4xl font-bold text-primary sm:text-5xl">
          Software engineer, blockchain enthusiast, and crypto trader.
        </h1>
        <p className="mt-6 grow text-lg text-primary-muted md:text-xl">
          I&apos;m Walid, a full-stack software engineer based in Arlington, Va.
          I currently work as a senior engineer and team lead Mastercard where
          we focus the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </p>
      </div> */}
    </div>
  );
}
