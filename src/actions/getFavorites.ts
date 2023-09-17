import { headers } from "next/headers";

const getFavorites = async () => {
  const host = headers().get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const res = await fetch(`${protocol}://${host}/api/favorites`, {
    method: "GET",
    cache: "no-cache",
  });

  const data = await res.json();

  return data;
};

export default getFavorites;
