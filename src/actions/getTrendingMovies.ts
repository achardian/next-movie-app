import { endpoints } from "@/utils/api";

const getTrendingMovies = async () => {
  const res = await fetch(endpoints.trendingMovies());

  const data = await res.json();

  return data;
};

export default getTrendingMovies;
