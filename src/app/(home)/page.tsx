import getTrendingMovies from "@/actions/getTrendingMovies";
import { Banner, Card } from "@/components";
import { MovieApiResponse } from "@/types";
import { imageUrl } from "@/utils/api";
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
      <div className='w-full grid grid-cols-2 lg:grid-cols-4 py-5 gap-8'>
        {trendingMovies.map((movie) => (
          <Card
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            id={movie.id}
            vote={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
