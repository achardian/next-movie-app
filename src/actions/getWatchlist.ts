import { headers } from "next/headers";

const getWatchlist = async () => {
  const res = await fetch(`/api/watchlist`, {
    method: "GET",
    headers: headers(),
    cache: "no-cache",
  });

  const data = await res.json();

  return data;
};

export default getWatchlist;
