"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import useSidebarStore from "@/store/sidebar-store";

const MenuBtn = () => {
  const { theme } = useTheme();
  const { setIsOpen, isOpen } = useSidebarStore();

  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <button
      onClick={handleClick}
      className='block lg:hidden p-2 bg-slate-200 dark:bg-gray-950 rounded-md'
    >
      <Image
        src={theme === "dark" ? "/menu-dark.svg" : "/menu-light.svg"}
        alt='menu'
        width={20}
        height={20}
      />
    </button>
  );
};

export default MenuBtn;
