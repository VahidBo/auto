import create from "zustand";

export type FiltersObjectType = { color: string; manufacturer: string };

export interface FiltersStore {
  filters: FiltersObjectType;
  setFilters: (fiters: FiltersObjectType) => void;
}

export const useFiltersStore = create<FiltersStore>((set) => ({
  filters: { color: "all", manufacturer: "all" },
  setFilters: (filters: FiltersObjectType) => set({ filters }),
}));
