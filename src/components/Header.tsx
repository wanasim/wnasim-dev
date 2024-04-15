import Profile from "./Profile";
import Menu from "./Menu";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="relative h-96 z-50 flex flex-none flex-col">
        <div className="relative h-10 top-10 sm:px-8 -mb-3 pt-3">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <Profile />
          </div>
        </div>
        <div className="sticky h-10 top-10 sm:px-8">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <Menu />
          </div>
        </div>
      </header>
    </>
  );
}
