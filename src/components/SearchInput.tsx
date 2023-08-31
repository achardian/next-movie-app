"use client";

import useMounted from "@/hooks/use-mounted";
import { ChangeEvent, useState } from "react";

const SearchInput = () => {
  const [searchVariant, setSearchVariant] = useState("Movie");

  const { isMounted } = useMounted();

  if (!isMounted) return null;

  return (
    <form
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      className='lg:w-2/5 w-full py-5 px-3 bg-gray-100 dark:bg-gray-800 rounded-md'
    >
      <input
        type='text'
        placeholder='Search'
        className='text-lg py-2 px-3 outline-none border-none rounded-md w-full'
      />
      <div className='flex gap-2 dark:bg-gray-900 bg-gray-300 mt-2'>
        <button
          className={`${
            searchVariant === "Movie"
              ? "dark:bg-gray-950 bg-gray-200"
              : "bg-transparent"
          } py-2 px-4`}
          onClick={() => setSearchVariant("Movie")}
          value='Movie'
        >
          Movie
        </button>
        <button
          className={`${
            searchVariant === "Tv"
              ? "dark:bg-gray-950 bg-gray-200"
              : "bg-transparent"
          } py-2 px-4`}
          onClick={() => setSearchVariant("Tv")}
          value='Tv'
        >
          Tv
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
