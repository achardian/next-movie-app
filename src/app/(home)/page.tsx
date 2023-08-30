import getTrendingMovies from "@/actions/getTrendingMovies";
import { Banner } from "@/components";
import { MovieApiResponse } from "@/types";
import { IMAGE_BASE_URL } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  const responseData: MovieApiResponse = await getTrendingMovies();
  const trendingMovie = responseData.results[0];
  const trendingMovies = responseData.results.slice(
    1,
    responseData.results.length
  );

  return (
    <div className='w-full p-3'>
      <Banner moviesData={trendingMovie} />
      <div className='w-full grid grid-cols-4 py-5 gap-8'>
        {trendingMovies.map((movie) => (
          <div
            key={movie.id}
            className='relative w-full h-80 rounded-lg overflow-clip group'
          >
            <Image
              src={IMAGE_BASE_URL + movie.poster_path}
              alt={movie.title}
              className='object-cover'
              fill
            />
            <Link
              href={`/movie/${movie.id}`}
              className='absolute inset-0 p-3 hidden group-hover:flex flex-col justify-end bg-gradient-to-t from-black to-black/20'
            >
              <h2 className='font-semibold text-white'>{movie.title}</h2>
            </Link>
            <div className='absolute inset-0 p-3 z-[-1] flex flex-col justify-end bg-gradient-to-t from-black to-black/20'></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
