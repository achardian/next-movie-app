import { endpoints } from "@/utils/api";

const getMoviesByFilter = async (filter: string, page: number = 1) => {
  const res = await fetch(endpoints.moviesByFilter(filter, page), {
    cache: "no-cache",
  });

  const data = await res.json();

  return data;
};

export default getMoviesByFilter;
