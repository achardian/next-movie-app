import { create } from "zustand";

type AuthModalStore = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
};

const useAuthModal = create<AuthModalStore>((set) => ({
  isOpen: false,
  setIsOpen: (state) => set(() => ({ isOpen: state })),
}));

export default useAuthModal;
