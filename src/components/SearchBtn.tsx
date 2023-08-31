"use client";

import useMounted from "@/hooks/use-mounted";
import useSearchModalStore from "@/store/search-modal-store";
import { useTheme } from "next-themes";
import Image from "next/image";

const SearchBtn = () => {
  const { isMounted } = useMounted();
  const { theme } = useTheme();
  const { setIsOpen } = useSearchModalStore();

  if (!isMounted) return null;

  return (
    <button
      onClick={() => setIsOpen(true)}
      className='flex items-center gap-2 border-2 py-2 px-4 w-32 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md text-gray-400 border-gray-200 dark:border-gray-800'
    >
      {theme === "dark" ? (
        <Image src='/search-light.svg' alt='search' height={20} width={20} />
      ) : (
        <Image src='/search-dark.svg' alt='search' height={20} width={20} />
      )}
      Search
    </button>
  );
};

export default SearchBtn;
