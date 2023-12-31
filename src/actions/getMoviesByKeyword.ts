import { endpoints } from "@/utils/api";

const getMoviesByKeyword = async (keyword: string, page: number = 1) => {
  const res = await fetch(endpoints.searchMovies(keyword, page), {
    cache: "no-cache",
  });

  const data = await res.json();

  return data;
};

export default getMoviesByKeyword;
