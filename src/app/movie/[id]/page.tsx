import getMovieDetail from "@/actions/getMovieDetail";
import { Detail } from "@/components";
import { IMovieDetail } from "@/types";
import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const movieData: IMovieDetail = await getMovieDetail(id);

  return {
    title: movieData.title,
  };
}

const MovieDetail = async ({ params }: Props) => {
  const movieData: IMovieDetail = await getMovieDetail(params.id);
  const releaseYear = movieData.release_date.split("-")[0];

  return (
    <Detail
      id={movieData.id}
      backdrop={movieData.backdrop_path}
      poster={movieData.poster_path}
      title={movieData.title}
      release_date={movieData.release_date}
      release_year={releaseYear}
      tagline={movieData.tagline}
      overview={movieData.overview}
      genres={movieData.genres}
      cast={movieData.credits.cast}
      crew={movieData.credits.crew}
      vote={movieData.vote_average}
    />
  );
};

export default MovieDetail;
