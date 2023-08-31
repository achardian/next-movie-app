"use client";

import useSearchModalStore from "@/store/search-modal-store";
import { SearchInput } from "..";
import { SyntheticEvent } from "react";

const SearchModal = () => {
  const { isOpen, setIsOpen } = useSearchModalStore();

  const closeModal = (e: SyntheticEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div
      onClick={closeModal}
      className={`fixed inset-0 z-[100] bg-gray-600/70 dark:bg-black/70 items-center justify-center ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <SearchInput />
    </div>
  );
};

export default SearchModal;
