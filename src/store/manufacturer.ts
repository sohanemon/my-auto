// @ts-nocheck
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface StoreType {
  manufacturers: Manufacturer[];
  setManufacturers(data: Manufacturer): void;
}

const store = (set: Function): StoreType => ({
  manufacturers: [],
  setManufacturers(data: Manufacturer[]) {
    set((state: StoreType) => {
      state.manufacturers = data;
    });
  },
});

const useManufacturer = create<StoreType, [['zustand/immer', never]]>(
  immer(store)
);
export default useManufacturer;
