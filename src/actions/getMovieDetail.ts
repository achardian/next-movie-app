import { endpoints } from "@/utils/api";

const getMovieDetail = async (id: string) => {
  const res = await fetch(endpoints.movieById(id));

  const data = await res.json();

  return data;
};

export default getMovieDetail;
