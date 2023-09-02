"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const FilterBtn = () => {
  const searchParams = useSearchParams();
  const isActive = searchParams.get("filter");

  const getActiveLink = (filter: string) =>
    isActive === filter ? "bg-red-600 text-white" : "bg-transparent text-white";

  return (
    <div className='my-5 flex items-center bg-gray-500'>
      <Link
        href={`/movie?filter=now_playing&page=1`}
        className={`filter-link-btn ${getActiveLink("now_playing")}`}
      >
        Now Playing
      </Link>
      <Link
        href={`/movie?filter=popular&page=1`}
        className={`filter-link-btn ${getActiveLink("popular")}`}
      >
        Popular
      </Link>
      <Link
        href={`/movie?filter=top_rated&page=1`}
        className={`filter-link-btn ${getActiveLink("top_rated")}`}
      >
        Top Rated
      </Link>
      <Link
        href={`/movie?filter=upcoming&page=1`}
        className={`filter-link-btn ${getActiveLink("upcoming")}`}
      >
        Upcoming
      </Link>
    </div>
  );
};

export default FilterBtn;
