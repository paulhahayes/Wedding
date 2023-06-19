import { create } from "zustand";

type RegistryStore = {
  inView: string | null;
  setInView: (inView: string | null) => void;
};

export const useRegistryStore = create<RegistryStore>((set) => ({
  inView: null,
  setInView: (inView: string | null) => set({ inView }),
}));
