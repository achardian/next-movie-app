"use client";

import { useSession } from "next-auth/react";
import axios from "axios";
import toast from "react-hot-toast";

type DetailButtonProps = {
  id: string;
  title: string;
  poster: string;
  vote: number;
  isTv: boolean;
};

const DetailButton = ({ id, title, poster, vote, isTv }: DetailButtonProps) => {
  const { data: session } = useSession();

  const addToFavorites = async () => {
    try {
      const { data } = await axios.post("/api/favorites", {
        id: id,
        title: title,
        poster: poster,
        vote: vote,
        favorite: true,
        userId: session?.user.id,
        isTv,
      });

      console.log(data);
      toast.success(data, { duration: 3000 });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex gap-3 mt-6'>
      <button onClick={addToFavorites} className='primary-btn'>
        Add to Favorites
      </button>
      <button className='primary-btn'>Add to Watchlist</button>
    </div>
  );
};

export default DetailButton;
