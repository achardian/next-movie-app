import getTvDetail from "@/actions/getTvDetail";
import { Detail } from "@/components";
import { ITvDetail } from "@/types";
import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tvData: ITvDetail = await getTvDetail(params.id);

  return {
    title: tvData.name,
  };
}

const TvDetail = async ({ params }: Props) => {
  const tvData: ITvDetail = await getTvDetail(params.id);

  const releaseYear = tvData.first_air_date.split("-")[0];

  return (
    <Detail
      id={tvData.id}
      backdrop={tvData.backdrop_path}
      poster={tvData.poster_path}
      title={tvData.name}
      release_date={tvData.first_air_date}
      release_year={releaseYear}
      tagline={tvData.tagline}
      overview={tvData.overview}
      genres={tvData.genres}
      cast={tvData.credits.cast}
      crew={tvData.credits.crew}
      vote={tvData.vote_average}
      isTv={true}
    />
  );
};

export default TvDetail;
