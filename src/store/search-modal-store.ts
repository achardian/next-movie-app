import { create } from "zustand";

type SearchModalStore = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
};

const useSearchModalStore = create<SearchModalStore>((set) => ({
  isOpen: false,
  setIsOpen: (state) => set(() => ({ isOpen: state })),
}));

export default useSearchModalStore;
