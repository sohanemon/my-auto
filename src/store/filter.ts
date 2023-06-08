// @ts-nocheck
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
interface StoreType {
  isDollar: boolean;
  toggleCurrency: () => void;
}

const store: StoreType = (set: Function) => ({
  isDollar: false,
  toggleCurrency: () =>
    set((state: StoreType) => {
      state.isDollar = !state.isDollar;
    }),
});

const useFilter = create<StoreType, [['zustand/immer', never]]>(immer(store));
export default useFilter;
