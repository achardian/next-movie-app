import getMovieDetail from "@/actions/getMovieDetail";
import { IMovieDetail } from "@/types";
import { imageUrl } from "@/utils/api";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const movieData: IMovieDetail = await getMovieDetail(id);

  return {
    title: movieData.title,
  };
}

const MovieDetail = async ({ params }: Props) => {
  const movieData: IMovieDetail = await getMovieDetail(params.id);
  const releaseYear = movieData.release_date.split("-")[0];

  console.log(movieData);

  return (
    <div className='w-full p-2'>
      <div className='relative w-full h-80 rounded-md overflow-clip'>
        <Image
          src={imageUrl.original + movieData.backdrop_path}
          alt={movieData.title}
          className='object-cover'
          fill
        />
        <div className='absolute inset-0 bg-gradient-to-t from-gray-500 to-gray-50/0 dark:from-black/60 dark:to-black/20'></div>
      </div>
      <div className='-mt-24 flex flex-col justify-center items-center relative'>
        <Image
          src={imageUrl.w500 + movieData.poster_path}
          width={150}
          height={200}
          alt={movieData.title}
          className='shadow-md rounded-lg'
        />
        <h1 className='font-bold text-2xl mt-5 mb-2'>
          {movieData.title} ({releaseYear})
        </h1>
        <small className='italic'>{movieData.tagline}</small>
      </div>
      <div className='px-3 mt-7'>
        <h2 className='font-semibold'>Overview</h2>
        <p>{movieData.overview}</p>
      </div>
      <div className='px-3 mt-7 gap-2 flex pb-6'>
        <h2>Genres: </h2>
        <p>{movieData.genres.map((genre) => genre.name).join(" / ")}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
