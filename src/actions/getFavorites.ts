import { headers } from "next/headers";

const getFavorites = async () => {
  const res = await fetch(`/api/favorites`, {
    method: "GET",
    headers: headers(),
    cache: "no-cache",
  });

  const data = await res.json();

  return data;
};

export default getFavorites;
