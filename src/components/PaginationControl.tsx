"use client";

import { useRouter, useSearchParams } from "next/navigation";

const PaginationControl = ({ totalPages }: { totalPages: number }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = searchParams.get("page");
  const filter = searchParams.get("filter");

  const handlePrevPage = () => {
    router.push(`/movie?filter=${filter}&page=${Number(page) - 1}`);
    router.refresh();
  };

  const handleNextPage = () => {
    router.push(`/movie?filter=${filter}&page=${Number(page) + 1}`);
    router.refresh();
  };

  return (
    <div className='w-full flex justify-center items-center gap-5 py-6'>
      <button
        onClick={handlePrevPage}
        disabled={page === "1"}
        className='pagination-btn'
      >
        Prev
      </button>
      <p className='font-semibold text-lg'>{page}</p>
      <button
        onClick={handleNextPage}
        disabled={page === totalPages.toString()}
        className='pagination-btn'
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControl;
