import { IMovieCast, IMovieCrew } from "@/types";
import { imageUrl } from "@/utils/api";
import Image from "next/image";

type DetailProps = {
  id: number;
  backdrop: string;
  poster: string;
  title: string;
  release_date: string;
  release_year: string;
  tagline: string;
  overview: string;
  genres: { id: number; name: string }[];
  cast: IMovieCast[];
  crew: IMovieCrew[];
  vote: number;
};

const Detail = ({ ...props }: DetailProps) => {
  const director = props.crew.find((person) => person.job === "Director");

  const cast = props.cast.length > 6 ? props.cast.slice(0, 6) : props.cast;

  return (
    <div className='w-full p-2'>
      <div className='relative w-full h-80 rounded-md overflow-clip'>
        <Image
          src={imageUrl.original + props.backdrop}
          alt={props.title}
          className='object-cover'
          fill
        />
        <div className='absolute inset-0 bg-gradient-to-t from-gray-500 to-gray-50/0 dark:from-black/60 dark:to-black/20'></div>
      </div>
      <div className='-mt-24 flex flex-col justify-center items-center relative'>
        <Image
          src={imageUrl.w500 + props.poster}
          width={150}
          height={200}
          alt={props.title}
          className='shadow-md rounded-lg'
        />
        <h1 className='font-bold text-2xl mt-5 mb-2'>
          {props.title} ({props.release_year})
        </h1>
        <small className='italic'>{props.tagline}</small>
      </div>

      <div className='flex flex-col lg:flex-row pb-5 mt-10'>
        <div className='flex-[1.5] lg:border-r-2 border-gray-300 px-3 py-2 rounded-md bg-gradient-to-r from-gray-400/20 to-gray-50/0'>
          <div className=''>
            <h2 className='font-semibold'>Overview</h2>
            <p>{props.overview}</p>
          </div>
          <div className='gap-2 flex pb-6 mt-3'>
            <h2 className='font-semibold'>Genres: </h2>
            <p>{props.genres.map((genre) => genre.name).join(" / ")}</p>
          </div>
        </div>
        <div className='flex-1 lg:border-l-2 border-gray-300 px-3 py-2 rounded-md bg-gradient-to-l from-gray-400/20 to-gray-50/0'>
          <div className='gap-2 flex pb-6'>
            <h2 className='font-semibold'>Release Date:</h2>
            <p>{props.release_date}</p>
          </div>
          <div>
            <h2 className='font-semibold'>Director</h2>
            <p>{director?.name}</p>
          </div>
          <div className='flex items-center gap-3 mt-5'>
            <Image src='/star.png' width={23} height={23} alt='star' />
            {Math.round(props.vote)}/10
          </div>
        </div>
      </div>

      <div className='pb-5'>
        <h2 className='text-xl font-semibold my-3'>Cast</h2>
        <div className='flex flex-wrap gap-3'>
          {cast.map((person) => (
            <div key={person.id}>
              <div className='relative w-[140px] h-[200px]'>
                <Image
                  src={imageUrl.w500 + person.profile_path}
                  alt={person.name}
                  className='object-cover rounded-md'
                  fill
                />
              </div>
              <h2 className='text-center'>{person.original_name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
