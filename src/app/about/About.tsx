import Image from 'next/image';
import AboutImage from '../../../public/about_image2.png';
import SocialLink from '@/components/SocialLink';
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  XIcon,
} from '@/components/ui/SocialIcons';

export default function About() {
  return (
    <div className="px-4 sm:px-8 lg:px-12">
      <div className="px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={AboutImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-xl bg-zinc-800 object-cover"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              I&apos;m Walid. I live in New York City, where I design the
              future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-gray-400">
              <p>
                I&apos;ve loved making things for as long as I can remember, and
                wrote my first program when I was 6 years old, just two weeks
                after my mom brought home the brand new Macintosh LC 550 that I
                taught myself to type on.
              </p>
              <p>
                The only thing I loved more than computers as a kid was space.
                When I was 8, I climbed the 40-foot oak tree at the back of our
                yard while wearing my older sister&apos;s motorcycle helmet,
                counted down from three, and jumped — hoping the tree was tall
                enough that with just a bit of momentum I&apos;d be able to get
                to orbit.
              </p>
              <p>
                I spent the next few summers indoors working on a rocket design,
                while I recovered from the multiple surgeries it took to fix my
                badly broken legs. It took nine iterations, but when I was 15 I
                sent my dad&apos;s Blackberry into orbit and was able to
                transmit a photo back down to our family computer from space.
              </p>
              <p>
                Today, I&apos;m the founder of Planetaria, where we&apos;re
                working on civilian space suits and manned shuttle kits you can
                assemble at home so that the next generation of kids really{' '}
                <em>can</em> make it to orbit — from the comfort of their own
                backyards.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={XIcon}>
                Follow on X
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:spencer@planetaria.tech"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-700/40 pt-8"
              >
                spencer@planetaria.tech
              </SocialLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
