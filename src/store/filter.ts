// @ts-nocheck
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface StoreType {
  cars: [];
  total: number;
  isDollar: boolean;
  isLoading: boolean;
  categories: any[];
  selectedManufacturer: number;
  selectedCategory: number;
  page: number;
  forSale: number;
  selectedSorting: string;
  selectedPeriod: string;
  selectedPriceRange: [number, number];
  setSelectedCategory: (id: number) => void;
  setSelectedSorting: (id: number) => void;
  setSelectedPeriod: (id: string) => void;
  setSelectedPriceRange: (start: number, end: number) => void;
  setSelectedManufacturer: (id: number) => void;
  setPage: (id: number) => void;
  setForSale: (id: number) => void;
  toggleCurrency: () => any;
  getCategories: () => any;
  getCars: () => any;
}

const store: StoreType = (set: Function, get: Function) => ({
  isDollar: false,
  isLoading: true,
  categories: null,
  page: 1,
  total: null,
  forSale: null,
  selectedSorting: 1,
  selectedCategory: null,
  selectedPeriod: null,
  selectedPriceRange: [null, null],
  cars: [],
  async getCars() {
    set((s) => ({ ...s, isLoading: true }));
    const res = await fetch(
      `https://api2.myauto.ge/ka/products/?Period=${
        get().selectedPeriod
      }&SortOrder=${get().selectedSorting}&Cats=${
        get().selectedCategory || ''
      }&Mans=${get().selectedManufacturer || ''}&PriceFrom${
        get().selectedPriceRange[0] || ''
      }=&PriceTo=${get().selectedPriceRange[1] || ''}&Page=${
        get().page || ''
      }&ForRent=${get().forSale || ''}`
    );
    const data = await res.json();
    console.log('🛑 ~ getCars ~ data:', data);

    set((s) => ({
      ...s,
      cars: data.data.items,
      total: data.data.meta.total,
      isLoading: false,
    }));
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
  setPage(id) {
    set((s: StoreType) => {
      s.page = id;
    });
    get().getCars();
  },
  setSelectedManufacturer(id) {
    set((s: StoreType) => {
      s.selectedManufacturer = id;
    });
  },
  setForSale(id) {
    set((s: StoreType) => {
      s.forSale = id;
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
