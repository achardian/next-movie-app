"use client";

import getMoviesByKeyword from "@/actions/getMoviesByKeyword";

import {
  IMovieResult,
  ITvResult,
  MovieApiResponse,
  TvApiResponse,
} from "@/types";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
import Loader from "./Loader";
import { SearchResult } from ".";
import getTvByKeyword from "@/actions/getTvByKeyword";

const SearchInput = () => {
  const [searchVariant, setSearchVariant] = useState("Movie");

  const inputRef = useRef<HTMLInputElement>(null);
  const [keyword, setKeyword] = useState("");
  const [movieResults, setMovieResults] = useState<IMovieResult[] | []>([]);
  const [tvResults, setTvResults] = useState<ITvResult[] | []>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [value] = useDebounce(keyword, 1000);

  useEffect(() => {
    setIsMounted(true);
    const getMovies = async (value: string) => {
      if (value && searchVariant === "Movie") {
        try {
          setIsLoading(true);
          const moviesData: MovieApiResponse = await getMoviesByKeyword(value);
          setTvResults([]);
          setMovieResults(moviesData.results);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      } else if (value && searchVariant === "Tv") {
        try {
          setIsLoading(true);
          const tvData: TvApiResponse = await getTvByKeyword(value);
          setMovieResults([]);
          setTvResults(tvData.results);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setMovieResults([]);
        setTvResults([]);
        setIsLoading(false);
      }
    };

    getMovies(value);
  }, [value, searchVariant]);

  if (!isMounted) return null;

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
        {value &&
          !isLoading &&
          movieResults.length === 0 &&
          searchVariant === "Movie" && (
            <h2 className='text-lg font-semibold text-red-600 text-center'>
              {value} is not found!
            </h2>
          )}
        {value &&
          !isLoading &&
          tvResults.length === 0 &&
          searchVariant === "Tv" && (
            <h2 className='text-lg font-semibold text-red-600 text-center'>
              {value} is not found!
            </h2>
          )}
        {movieResults?.map((result) => (
          <SearchResult
            key={result.id}
            title={result.title}
            poster={result.poster_path}
            id={result.id}
            vote={result.vote_average}
          />
        ))}
        {tvResults?.map((result) => (
          <SearchResult
            key={result.id}
            title={result.name}
            poster={result.poster_path}
            id={result.id}
            vote={result.vote_average}
            tv
          />
        ))}
      </div>
    </form>
  );
};

export default SearchInput;
