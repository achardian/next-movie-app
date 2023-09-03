import { IMovieResult, ITvResult } from "@/types";
import { imageUrl } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";

const Banner = ({
  title,
  id,
  backdrop_path,
  overview,
}: {
  title: string;
  id: number;
  backdrop_path: string;
  overview: string;
}) => {
  return (
    <div className='relative w-full h-[420px] rounded-md overflow-clip'>
      <Image
        src={imageUrl.original + backdrop_path}
        alt={title}
        className='object-cover'
        fill
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-black/10 p-3 flex flex-col justify-end'>
        <Link href={`/movie/${id}`}>
          <h1 className='font-semibold text-3xl text-white tracking-wide mb-2'>
            {title}
          </h1>
          <p className='text-gray-200'>{overview}</p>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
