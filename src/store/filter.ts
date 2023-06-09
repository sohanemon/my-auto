// @ts-nocheck
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
type SortingType =
  | 'თარიღი კლებადი'
  | 'ფასი კლებადი'
  | 'ფასი ზრდადი'
  | 'გარბენი კლებადი'
  | 'გარბენი ზრდადი';
interface StoreType {
  isDollar: boolean;
  sortingType: SortingType;
  categories: any[];
  setSortingType(type: SortingType): void;
  toggleCurrency: () => any;
  getCategories: () => any;
}

const store: StoreType = (set: Function) => ({
  isDollar: false,
  sortingType: 'თარიღი კლებადი',
  categories: null,
  setSortingType(type: SortingType) {
    console.log('🛑 ~ setSortingType ~ type:', type);

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
