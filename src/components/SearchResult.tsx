"use client";
import useSearchModalStore from "@/store/search-modal-store";
import { imageUrl } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";

type SearchResultProps = {
  id: number;
  poster: string;
  title: string;
  vote: number;
};

const SearchResult = ({ id, poster, title, vote }: SearchResultProps) => {
  const { setIsOpen } = useSearchModalStore();

  return (
    <div className='dark:bg-gray-950 bg-white p-2 flex gap-3'>
      <div className='relative w-16 h-24'>
        <Image src={imageUrl.w500 + poster} alt={title} fill />
      </div>
      <Link
        href={`/movie/${id}`}
        onClick={() => setIsOpen(false)}
        className='flex flex-col justify-center gap-3 flex-1'
      >
        <h3>{title}</h3>
        <div className='flex gap-3 items-center'>
          <Image src='/star.png' width={20} height={20} alt='star' />
          {Math.round(vote)}/10
        </div>
      </Link>
    </div>
  );
};

export default SearchResult;
