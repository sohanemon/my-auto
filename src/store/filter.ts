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
  selectedCategory: number;
  categories: any[];
  setSelectedCategory: (id: number) => void;
  setSortingType(type: SortingType): void;
  toggleCurrency: () => any;
  getCategories: () => any;
}

const store: StoreType = (set: Function) => ({
  isDollar: false,
  sortingType: 'თარიღი კლებადი',
  categories: null,
  selectedCategory: null,
  setSelectedCategory(id) {
    set((s: StoreType) => {
      s.selectedCategory = id;
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
});

const useFilter = create<StoreType, [['zustand/immer', never]]>(immer(store));
export default useFilter;

useFilter.subscribe((s) => {
  console.log('filter', s);
});
