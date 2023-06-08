// @ts-nocheck
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
interface StoreType {
  isDollar: boolean;
  setIsDollar: (opt: any) => void;
}

const store: StoreType = (set: Function) => ({
  isDollar: false,
  setIsDollar: (opt) =>
    set((state: StoreType) => {
      state.isDollar = opt;
    }),
});

const useFilter = create<StoreType, [['zustand/immer', never]]>(immer(store));
export default useFilter;
