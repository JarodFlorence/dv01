import { create } from "zustand";

const useDataStore = create((set) => ({
  data: [],
  setData: (data) => set({ data }),
}));

export { useDataStore };
