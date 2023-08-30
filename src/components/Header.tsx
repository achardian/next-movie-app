import Link from "next/link";
import { Playfair_Display } from "next/font/google";

import { MenuBtn, ModeToggle } from ".";

const font = Playfair_Display({ subsets: ["latin"], weight: "700" });

const Header = () => {
  return (
    <header className='dark:bg-[#18122B] bg-gray-100 py-3 px-10 flex justify-between items-center fixed top-0 inset-x-0 z-[99]'>
      <div className='flex items-center gap-3'>
        <MenuBtn />
        <Link href='/'>
          <h1
            className={`text-2xl text-gray-800 dark:text-gray-50 tracking-wide ${font.className}`}
          >
            Watch <span className='text-gray-600 dark:text-gray-300'>Me</span>
          </h1>
        </Link>
      </div>
      <ModeToggle />
    </header>
  );
};

export default Header;
