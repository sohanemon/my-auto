// @ts-nocheck
import { create } from 'zustand';

const store = (set: Function) => ({
  cars: [],
  async getCars() {
    const res = await fetch('https://api2.myauto.ge/ka/products/');
    const data = await res.json();
    set((s) => ({ ...s, cars: data.data.items }));
  },
});

const useCars = create(store);
export default useCars;
