// @ts-nocheck
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
type SortingType =
  | 'თარიღი კლებადი'
  | 'თარიღი ზრდადი'
  | 'ფასი კლებადი'
  | 'ფასი ზრდადი'
  | 'გარბენი კლებადი'
  | 'გარბენი ზრდადი';
interface StoreType {
  isDollar: boolean;
  sortingType: SortingType;
  categories: any[];
  selectedManufacturer: number;
  selectedCategory: number;
  selectedPeriod: number;
  setSelectedCategory: (id: number) => void;
  setSelectedPeriod: (id: number) => void;
  setSelectedManufacturer: (id: number) => void;
  setSortingType(type: SortingType): void;
  toggleCurrency: () => any;
  getCategories: () => any;
}

const store: StoreType = (set: Function) => ({
  isDollar: false,
  sortingType: 'თარიღი კლებადი',
  categories: null,
  selectedCategory: null,
  selectedPeriod: null,

  setSelectedCategory(id) {
    set((s: StoreType) => {
      s.selectedCategory = id;
    });
  },
  setSelectedManufacturer(id) {
    set((s: StoreType) => {
      s.selectedManufacturer = id;
    });
  },
  setSortingType(type: SortingType) {
    set((s: StoreType) => {
      s.sortingType = type;
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
  },
});

const useFilter = create<StoreType, [['zustand/immer', never]]>(immer(store));
export default useFilter;

useFilter.subscribe((s) => {
  console.log('filter', s);
});
