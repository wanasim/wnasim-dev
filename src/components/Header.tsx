"use client";
import Profile from "./Profile";
import Menu from "./Menu";
import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Header() {
  const [showNav, updateShowNav] = useState(true);

  useEffect(() => {
    let prevScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
      const currScrollY = window.scrollY;

      if (currScrollY > 100 && prevScrollY < currScrollY) {
        updateShowNav(false);
      } else {
        updateShowNav(true);
      }

      prevScrollY = currScrollY;
    });
  }, []);

  return (
    <>
      <header className="relative h-40 z-50 flex flex-none flex-col">
        <div
          className={clsx(
            "fixed z-10 w-full top-10 sm:px-8  transition-all ease-in",
            showNav ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <Menu />
          </div>
        </div>
      </header>
    </>
  );
}
