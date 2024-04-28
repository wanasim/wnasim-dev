"use client";
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
} from "@/components/ui/NavigationMenu";
import Link from "next/link";
import { BackgroundGradientAnimation } from "./ui/BackgroundGradientAnimation";

import Image from "next/image";

export default function Menu() {
  return (
    <div className="relative flex gap-4 px-4 sm:px-8 lg:px-12">
      {/* <BackgroundGradientAnimation> */}
      <Image
        src="/avatar.jpeg"
        alt=""
        width={400}
        height={400}
        className=" flex flex-0 z-30 rounded-full blur-[.75] ring-1 ring-offset-2 ring-offset-black ring-zinc-300/20 object-cover bg-zinc-800 h-14 w-14"
      />
      <div className="w-full z-10  flex flex-1 justify-end md:justify-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                >
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                >
                  Experience
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                >
                  Projects /
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                >
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
