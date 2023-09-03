import { endpoints } from "@/utils/api";

const getTvByFilter = async (filter: string, page: number = 1) => {
  const res = await fetch(endpoints.tvByFilter(filter, page));

  const data = await res.json();

  return data;
};

export default getTvByFilter;
