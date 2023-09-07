import { create } from "zustand";

interface ImageUploadModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useImageUpload = create<ImageUploadModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useImageUpload;
