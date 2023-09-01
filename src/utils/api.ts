const BASE_MOVIE_URL = "https://api.themoviedb.org/3/movie";
const BASE_TV_URL = "https://api.themoviedb.org/3/tv";
const API_KEY_SERVER = process.env.NEXT_MOVIE_API_KEY;
const API_KEY_CLIENT = process.env.NEXT_PUBLIC_MOVIE_API_KEY;

const endpointBuilder = (
  BASE_URL: string,
  API_KEY: string,
  filterVariant: string,
  page?: number
) => {
  return `${BASE_URL}/${filterVariant}?api_key=${API_KEY}${
    page ? `&page=${page}` : ""
  }&append_to_response=videos,credits`;
};

const endpoints = {
  popularMovies: (page: number = 1) => {
    return endpointBuilder(
      BASE_MOVIE_URL,
      API_KEY_SERVER as string,
      "popular",
      page
    );
  },
  trendingMovies: () =>
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY_SERVER}&page=1`,
  movieById: (id: string) => {
    return endpointBuilder(BASE_MOVIE_URL, API_KEY_SERVER as string, id);
  },
  searchMovies: (keyword: string, page: number = 1) =>
    `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=${API_KEY_CLIENT}&page=${page}`,
  searchTv: (keyword: string, page: number = 1) =>
    `https://api.themoviedb.org/3/search/tv?query=${keyword}&api_key=${API_KEY_CLIENT}&page=${page}`,
};

const imageUrl = {
  original: "https://image.tmdb.org/t/p/original",
  w500: "https://image.tmdb.org/t/p/w500",
};

export { endpoints, imageUrl };
