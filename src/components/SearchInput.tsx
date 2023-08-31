"use client";

import getMoviesByKeyword from "@/actions/getMoviesByKeyword";
import useMounted from "@/hooks/use-mounted";
import useSearchModalStore from "@/store/search-modal-store";
import { IMovieResult, MovieApiResponse } from "@/types";
import { imageUrl } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
import Loader from "./Loader";

const SearchInput = () => {
  const [searchVariant, setSearchVariant] = useState("Movie");

  const inputRef = useRef<HTMLInputElement>(null);
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState<IMovieResult[] | []>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [value] = useDebounce(keyword, 1500);

  useEffect(() => {
    setIsMounted(true);
    const getMovies = async (value: string) => {
      if (value) {
        try {
          setIsLoading(true);
          const moviesData: MovieApiResponse = await getMoviesByKeyword(value);
          setResults(moviesData.results);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setResults([]);
        setIsLoading(false);
      }
    };

    getMovies(value);
  }, [value]);

  if (!isMounted) return null;

  console.log(results, value);

  return (
    <form
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      className='lg:w-2/5 w-full py-5 px-3 bg-gray-100 dark:bg-gray-900 rounded-md'
    >
      <input
        type='text'
        placeholder='Search'
        className='text-lg py-2 px-3 outline-none border-none rounded-md w-full bg-transparent '
        onChange={(e) => setKeyword(e.target.value)}
        ref={inputRef}
      />
      <div className='flex gap-2 dark:bg-black bg-gray-300 mt-2'>
        <button
          className={`${
            searchVariant === "Movie"
              ? "dark:bg-gray-950 bg-gray-200"
              : "bg-transparent"
          } py-2 px-4 text-sm`}
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
          } py-2 px-4 text-sm`}
          onClick={() => setSearchVariant("Tv")}
          value='Tv'
        >
          Tv
        </button>
      </div>

      <div className='max-h-[400px] overflow-y-auto flex flex-col gap-2 mt-3'>
        {isLoading && <Loader />}
        {results?.map((result) => (
          <div
            key={result.id}
            className='dark:bg-gray-950 bg-white p-2 flex gap-3'
          >
            <div className='relative w-16 h-24'>
              <Image
                src={imageUrl.w500 + result.poster_path}
                alt={result.title}
                fill
              />
            </div>
            <Link
              href={`/movie/${result.id}`}
              className='flex flex-col justify-center gap-3 flex-1'
            >
              <h3>{result.title}</h3>
              <div className='flex gap-3 items-center'>
                <Image src='/star.png' width={20} height={20} alt='star' />
                {Math.round(result.vote_average)}/10
              </div>
            </Link>
          </div>
        ))}
      </div>
    </form>
  );
};

export default SearchInput;
