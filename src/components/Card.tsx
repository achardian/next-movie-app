import { imageUrl } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  id: number;
  poster_path: string;
  title: string;
  vote: number;
};

const Card = ({ id, poster_path, title, vote }: CardProps) => {
  return (
    <div className='relative w-full h-80 rounded-lg overflow-clip group'>
      <Image
        src={imageUrl.w500 + poster_path}
        alt={title}
        className='object-cover'
        fill
      />
      <Link
        href={`/movie/${id}`}
        className='absolute inset-0 p-3 hidden group-hover:flex flex-col justify-end bg-gradient-to-t from-black to-black/20'
      >
        <div className='flex items-center gap-3 mb-3'>
          <Image src='/star.png' width={20} height={20} alt='star' />
          <h2 className='text-white'>{Math.round(vote)}/10</h2>
        </div>
        <h2 className='font-semibold text-white'>{title}</h2>
      </Link>
      <div className='absolute inset-0 p-3 z-[-1] flex flex-col justify-end bg-gradient-to-t from-black to-black/20'></div>
    </div>
  );
};

export default Card;
