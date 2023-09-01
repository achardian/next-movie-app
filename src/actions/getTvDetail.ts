import { endpoints } from "@/utils/api";

const getTvDetail = async (id: string) => {
  const res = await fetch(endpoints.tvById(id));

  const data = await res.json();

  return data;
};

export default getTvDetail;
