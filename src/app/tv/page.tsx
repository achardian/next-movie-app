import getTvByFilter from "@/actions/getTvByFilter";
import { Banner, Card, FilterBtn, PaginationControl } from "@/components";
import { ITvResult, TvApiResponse } from "@/types";

const Tv = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { filter, page } = searchParams;

  const results: TvApiResponse = await getTvByFilter(
    filter as string,
    Number(page)
  );

  const bannerData = results.results[0];
  const tvResults = results.results.slice(1, results.results.length);

  return (
    <div className='px-3 w-full'>
      <FilterBtn tv />
      <Banner
        id={bannerData.id}
        title={bannerData.name}
        overview={bannerData.overview}
        backdrop_path={bannerData.backdrop_path}
      />
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5'>
        {tvResults.map((tv) => (
          <Card
            key={tv.id}
            poster_path={tv.poster_path}
            title={tv.name}
            id={tv.id}
            vote={tv.vote_average}
            tv
          />
        ))}
      </div>
      <PaginationControl totalPages={results.total_pages} tv />
    </div>
  );
};

export default Tv;
