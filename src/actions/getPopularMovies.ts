import { endpoints } from "@/utils/api";

const getPopularMovies = async () => {
  const res = await fetch(endpoints.popularMovies());

  const data = await res.json();

  return data;
};

export default getPopularMovies;
