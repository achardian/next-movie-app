import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import prismadb from "@/lib/prismadb";
import { authOptions } from "../auth/[...nextauth]/route";

export const POST = async (req: Request) => {
  const { id, title, poster, vote, userId, isTv } = await req.json();

  try {
    if (isTv) {
      const tv = await prismadb.tv.findFirst({
        where: {
          userId,
          tvId: id,
          watchlist: true,
        },
      });

      if (tv)
        return NextResponse.json(
          "Cannot added, It is already in your watchlist",
          { status: 200 }
        );

      await prismadb.tv.create({
        data: {
          tvId: id,
          title,
          poster,
          vote,
          watchlist: true,
          userId,
        },
      });

      return NextResponse.json("Successfully added into your watchlist!", {
        status: 201,
      });
    } else {
      const movie = await prismadb.movie.findFirst({
        where: {
          userId,
          movieId: id,
          watchlist: true,
        },
      });

      if (movie)
        return NextResponse.json(
          "Cannot added, It is already in your watchlist",
          { status: 200 }
        );

      await prismadb.movie.create({
        data: {
          movieId: id,
          title,
          poster,
          vote,
          watchlist: true,
          userId,
        },
      });

      return NextResponse.json("Successfully added into your watchlist!", {
        status: 201,
      });
    }
  } catch (error) {
    return NextResponse.json("Error, failed to add this to your watchlist!", {
      status: 500,
    });
  }
};

export const GET = async (req: Request) => {
  try {
    const session = await getServerSession(authOptions);

    const movieData = prismadb.movie.findMany({
      where: {
        userId: session?.user.id,
        watchlist: true,
      },
    });

    const tvData = prismadb.tv.findMany({
      where: {
        userId: session?.user.id,
        watchlist: true,
      },
    });

    const [movie, tv] = await Promise.all([movieData, tvData]);

    return NextResponse.json({ movie, tv }, { status: 200 });
  } catch (error) {
    return NextResponse.json("Something went wrong!", { status: 500 });
  }
};
