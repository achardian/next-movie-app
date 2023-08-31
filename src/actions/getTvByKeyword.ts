import { endpoints } from "@/utils/api";

const getTvByKeyword = async (keyword: string, page: number = 1) => {
  const res = await fetch(endpoints.searchTv(keyword, page), {
    cache: "no-cache",
  });

  const data = await res.json();

  return data;
};

export default getTvByKeyword;
