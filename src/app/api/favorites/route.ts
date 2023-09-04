import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { id, title, poster, vote, favorite, userId, isTv } = await req.json();

  try {
    if (isTv === true) {
      const tv = await prismadb.tv.findFirst({
        where: {
          tvId: id,
          userId,
        },
      });

      if (tv)
        return NextResponse.json(
          "Cannot added, It is already in your favorites!",
          { status: 200 }
        );

      await prismadb.tv.create({
        data: {
          tvId: id,
          title,
          poster,
          vote,
          favorite,
          userId,
        },
      });

      return NextResponse.json("Successfully added into your favorites!", {
        status: 201,
      });
    } else {
      const movie = await prismadb.movie.findFirst({
        where: {
          movieId: id,
          userId,
        },
      });

      if (movie)
        return NextResponse.json(
          "Cannot added, It is already in your favorites!",
          { status: 200 }
        );

      await prismadb.movie.create({
        data: {
          movieId: id,
          title,
          poster,
          vote,
          favorite,
          userId,
        },
      });

      return NextResponse.json("Successfully added into your favorites!", {
        status: 201,
      });
    }
  } catch (error) {
    return NextResponse.json("Something went wrong!", { status: 500 });
  }
};
