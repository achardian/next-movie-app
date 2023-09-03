import getMoviesByFilter from "@/actions/getMoviesByFilter";
import { Banner, Card, FilterBtn, PaginationControl } from "@/components";
import { MovieApiResponse } from "@/types";

const MoviePage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { filter, page } = searchParams;

  const result: MovieApiResponse = await getMoviesByFilter(
    filter as string,
    Number(page)
  );

  const bannerData = result.results[0];
  const movies = result.results.slice(1, result.results.length);

  return (
    <div className='px-3 w-full'>
      <FilterBtn />
      <Banner
        id={bannerData.id}
        title={bannerData.title}
        overview={bannerData.overview}
        backdrop_path={bannerData.backdrop_path}
      />
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5'>
        {movies.map((movie) => (
          <Card
            key={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            id={movie.id}
            vote={movie.vote_average}
          />
        ))}
      </div>
      <PaginationControl totalPages={result.total_pages} />
    </div>
  );
};

export default MoviePage;
