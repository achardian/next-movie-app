"use client";

import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const RemoveBtn = ({
  id,
  isTv,
  isFavorite,
  isWatchlist,
}: {
  id: string;
  isTv: boolean;
  isFavorite?: boolean;
  isWatchlist?: boolean;
}) => {
  const router = useRouter();

  const handleRemove = async () => {
    try {
      if (isFavorite) {
        const { data } = await axios.delete("/api/favorites", {
          data: { id, isTv },
        });
        toast.success(data, { duration: 3000 });
        router.refresh();
      }

      if (isWatchlist) {
        const { data } = await axios.delete("/api/watchlist", {
          data: { id, isTv },
        });
        toast.success(data, { duration: 3000 });
        router.refresh();
      }
    } catch (error) {
      const err = error as AxiosError;
      toast.error(err.response?.data as string);
    }
  };

  return (
    <button
      onClick={handleRemove}
      className='bg-red-600 hover:bg-red-500 text-white py-2 w-full mt-1 rounded-lg font-semibold'
    >
      Remove
    </button>
  );
};

export default RemoveBtn;
