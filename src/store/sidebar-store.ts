import { create } from "zustand";

type SidebarStore = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
};

const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false,
  setIsOpen: (state) => set(() => ({ isOpen: state })),
}));

export default useSidebarStore;
