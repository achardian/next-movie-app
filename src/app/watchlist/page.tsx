import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import getWatchlist from "@/actions/getWatchlist";
import { Movie, Tv } from "@prisma/client";
import { Card } from "@/components";
import RemoveBtn from "@/components/RemoveBtn";

const Watchlist = async () => {
  const session = await getServerSession(authOptions);
  const data = await getWatchlist();

  const movies: Movie[] = data.movie;
  const tv: Tv[] = data.tv;

  if (!session?.user) {
    return (
      <div className='w-full flex items-center justify-center'>
        <h1 className='text-2xl'>You must sign in to access this page!</h1>
      </div>
    );
  }

  return (
    <div className='w-full p-3'>
      <div className='flex flex-col gap-3 py-5'>
        {movies.length > 0 && (
          <div className='flex flex-col gap-3'>
            <h1 className='text-xl'>Movies</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
              {movies.map((movie) => (
                <div key={movie.id} className='w-full'>
                  <Card
                    id={parseInt(movie.movieId)}
                    poster_path={movie.poster}
                    title={movie.title}
                    vote={movie.vote}
                  />
                  <RemoveBtn id={movie.id} isWatchlist isTv={false} />
                </div>
              ))}
            </div>
          </div>
        )}
        {tv.length > 0 && (
          <div className='mt-5 flex flex-col gap-3'>
            <h1 className='text-xl'>Tv</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
              {tv.map((items) => (
                <div className='w-full'>
                  <Card
                    key={items.id}
                    id={Number(items.tvId)}
                    poster_path={items.poster}
                    title={items.title}
                    vote={items.vote}
                    tv={true}
                  />
                  <RemoveBtn id={items.id} isWatchlist isTv />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
