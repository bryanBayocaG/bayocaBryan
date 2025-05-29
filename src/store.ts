import { create } from "zustand";
type LoadStore = {
  isLoading: boolean;
  setLoading: () => void;
  setNotLoading: () => void;
};
export const useLoadStore = create<LoadStore>()((set) => ({
  isLoading: true,
  setLoading: () => set((state) => ({ isLoading: (state.isLoading = true) })),
  setNotLoading: () =>
    set((state) => ({ isLoading: (state.isLoading = false) })),
}));
