"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const FilterBtn = ({ tv }: { tv?: boolean }) => {
  const searchParams = useSearchParams();
  const isActive = searchParams.get("filter");
  const isTv = tv ? "tv" : "movie";

  const getActiveLink = (filter: string) =>
    isActive === filter ? "bg-red-600 text-white" : "bg-transparent text-white";

  return (
    <div className='my-5 flex items-center bg-gray-500'>
      <Link
        href={`/${isTv}?filter=${tv ? "airing_today" : "now_playing"}&page=1`}
        className={`filter-link-btn ${getActiveLink(
          tv ? "airing_today" : "now_playing"
        )}`}
      >
        {tv ? "Airing Today" : "Now Playing"}
      </Link>
      <Link
        href={`/${isTv}?filter=popular&page=1`}
        className={`filter-link-btn ${getActiveLink("popular")}`}
      >
        Popular
      </Link>
      <Link
        href={`/${isTv}?filter=top_rated&page=1`}
        className={`filter-link-btn ${getActiveLink("top_rated")}`}
      >
        Top Rated
      </Link>
      <Link
        href={`/${isTv}?filter=${tv ? "on_the_air" : "upcoming"}&page=1`}
        className={`filter-link-btn ${getActiveLink(
          tv ? "on_the_air" : "upcoming"
        )}`}
      >
        {tv ? "On The Air" : "Upcoming"}
      </Link>
    </div>
  );
};

export default FilterBtn;
