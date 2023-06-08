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
  setSortingType(type: SortingType): void;
  toggleCurrency: () => any;
}

const store: StoreType = (set: Function) => ({
  isDollar: false,
  sortingType: 'თარიღი კლებადი',
  setSortingType(type: SortingType) {
    set((s: StoreType) => {
      s.sortingType = type;
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
