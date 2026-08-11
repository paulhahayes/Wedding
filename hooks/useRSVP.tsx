import { create } from "zustand";

interface RSVPModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRSVP = create<RSVPModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRSVP;
