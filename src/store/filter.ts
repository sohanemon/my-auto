// @ts-nocheck
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface StoreType {
  cars: [];
  isDollar: boolean;
  categories: any[];
  selectedManufacturer: number;
  selectedCategory: number;
  selectedSorting: string;
  selectedPeriod: string;
  selectedPriceRange: [number, number];
  setSelectedCategory: (id: number) => void;
  setSelectedSorting: (id: number) => void;
  setSelectedPeriod: (id: string) => void;
  setSelectedPriceRange: (start: number, end: number) => void;
  setSelectedManufacturer: (id: number) => void;
  toggleCurrency: () => any;
  getCategories: () => any;
  getCars: () => any;
}

const store: StoreType = (set: Function, get: Function) => ({
  isDollar: false,
  categories: null,
  selectedSorting: 1,
  selectedCategory: null,
  selectedPeriod: null,
  selectedPriceRange: [null, null],
  cars: [],
  async getCars() {
    const res = await fetch(
      `https://api2.myauto.ge/ka/products/?Period=${
        get().selectedPeriod
      }&SortOrder=${get().selectedSorting}&Cats=${get().selectedCategory}`
    );
    const data = await res.json();
    console.log('🛑 ~ getCars ~ data:', data);

    set((s) => ({ ...s, cars: data.data.items }));
  },
  setSelectedCategory(id) {
    set((s: StoreType) => {
      s.selectedCategory = id;
    });
  },
  setSelectedSorting(id) {
    set((s: StoreType) => {
      s.selectedSorting = id;
    });
    get().getCars();
  },
  setSelectedManufacturer(id) {
    set((s: StoreType) => {
      s.selectedManufacturer = id;
    });
  },

  async getCategories() {
    const res = await fetch('https://api2.myauto.ge/ka/cats/get');
    const data = await res.json();
    set((s) => {
      s.categories = data.data;
    });
  },
  toggleCurrency: () =>
    set((state: StoreType) => {
      state.isDollar = !state.isDollar;
    }),
  setSelectedPeriod(time) {
    set((state: StoreType) => {
      state.selectedPeriod = time;
    });
    get().getCars();
  },
  setSelectedPriceRange(start, end) {
    set((s: StoreType) => {
      s.selectedPriceRange = [start, end];
    });
  },
});

const useFilter = create<StoreType, [['zustand/immer', never]]>(immer(store));
export default useFilter;

useFilter.subscribe((s) => {
  console.log('filter', s);
});
