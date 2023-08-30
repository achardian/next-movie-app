const BASE_MOVIE_URL = "https://api.themoviedb.org/3/movie";
const BASE_TV_URL = "https://api.themoviedb.org/3/tv";
const API_KEY_SERVER = process.env.NEXT_MOVIE_API_KEY;

const endpointBuilder = (
  BASE_URL: string,
  API_KEY: string,
  filterVariant: string,
  page: number
) => {
  return `${BASE_URL}/${filterVariant}?api_key=${API_KEY}&page=${page}`;
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
};

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export { endpoints, IMAGE_BASE_URL };
