import { headers } from "next/headers";

const getWatchlist = async () => {
  const res = await fetch(`${process.env.NEXT_URL}/api/watchlist`, {
    method: "GET",
    headers: headers(),
    cache: "no-cache",
  });

  const data = await res.json();

  return data;
};

export default getWatchlist;
