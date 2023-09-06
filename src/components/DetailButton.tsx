"use client";

import { useSession } from "next-auth/react";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type DetailButtonProps = {
  id: string;
  title: string;
  poster: string;
  vote: number;
  isTv: boolean;
};

const DetailButton = ({ id, title, poster, vote, isTv }: DetailButtonProps) => {
  const { data: session } = useSession();
  const router = useRouter();

  const postData = {
    id: id,
    title: title,
    poster: poster,
    vote: vote,
    userId: session?.user.id,
    isTv,
  };

  const addToFavorites = async () => {
    try {
      const { data } = await axios.post("/api/favorites", { ...postData });

      toast.success(data, { duration: 3000 });
      router.refresh();
    } catch (error) {
      const err = error as AxiosError;
      toast.error(err.response?.data as string, { duration: 3000 });
    }
  };

  const addToWatchlist = async () => {
    try {
      const { data } = await axios.post("/api/watchlist", { ...postData });

      toast.success(data, { duration: 3000 });
      router.refresh();
    } catch (error) {
      const err = error as AxiosError;
      toast.error(err.response?.data as string, { duration: 3000 });
    }
  };

  if (!session?.user) return null;

  return (
    <div className='flex gap-3 mt-6'>
      <button onClick={addToFavorites} className='primary-btn'>
        Add to Favorites
      </button>
      <button onClick={addToWatchlist} className='primary-btn'>
        Add to Watchlist
      </button>
    </div>
  );
};

export default DetailButton;
