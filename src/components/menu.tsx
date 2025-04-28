'use client';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/NavigationMenu';
import Link from 'next/link';
import { BackgroundGradientAnimation } from './ui/BackgroundGradientAnimation';

import Image from 'next/image';

export default function Menu() {
  return (
    <div className="relative flex gap-4 px-4 sm:px-8 lg:px-12">
      <Link href="/">
        <Image
          src="/avatar.jpeg"
          alt=""
          width={400}
          height={400}
          className="flex-0 z-30 flex h-14 w-14 rounded-full bg-zinc-800 object-cover ring-1 ring-zinc-300/20 ring-offset-2 ring-offset-black blur-[.75]"
        />
      </Link>
      <div className="z-10 flex w-full flex-1 justify-end md:justify-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/experience" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Experience
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/projects" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Projects
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuIndicator>
              sd;fssdlkfnsdfnklsnfksdn
            </NavigationMenuIndicator>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* </BackgroundGradientAnimation> */}
    </div>
  );
}
