'use client';
import Profile from './Profile';
import Menu from './menu';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

export default function Header() {
  const [showNav, updateShowNav] = useState(true);

  useEffect(() => {
    let prevScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
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
      <header className="relative z-50 flex h-40 flex-none flex-col">
        <div
          className={clsx(
            'fixed top-10 z-10 w-full transition-all ease-in sm:px-8',
            showNav ? 'opacity-100' : 'opacity-0'
          )}
        >
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <Menu />
          </div>
        </div>
        {/* <div className="absolute inset-x-0 -bottom-5 h-8 after:absolute after:inset-x-0 after:left-0 after:top-0 after:h-28 after:bg-[url('/curvy33.svg')] after:bg-contain after:bg-repeat-x after:content-['']"></div> */}
      </header>
    </>
  );
}
