// @ts-nocheck
'use client';
import useCars from '@/store/cars';
import useFilter from '@/store/filter';
import { Suspense, useMemo } from 'react';
import AllCarsHeader from './all-cars-header';
import CarCard from './car-card';

export default function AllCars() {
  const cars: CarData[] = useCars((s) => s.cars);
  const sortingType = useFilter((s) => s.sortingType);
  const filteredCar: CarData[] = useMemo(() => {
    switch (sortingType) {
      // date inc
      case 'თარიღი კლებადი':
        return cars.sort(
          (a, b) => new Date(a.order_date) - new Date(b.order_date)
        );
      // date dec
      case 'თარიღი ზრდადი':
        return cars.sort(
          (a, b) => new Date(b.order_date) - new Date(a.order_date)
        );

      // price dec
      case 'ფასი ზრდადი':
        return cars.sort((a, b) => b.price - a.price);
      // price inc
      case 'ფასი კლებადი':
        return cars.sort((a, b) => a.price - b.price);
      // run inc
      case 'გარბენი კლებადი':
        return cars.sort((a, b) => a.car_run_km - b.car_run_km);
      // run dec
      case 'გარბენი ზრდადი':
        return cars.sort((a, b) => b.car_run_km - a.car_run_km);
      default:
        return cars;
    }
  }, [cars, sortingType]);
  return (
    <section className='col-span-3 space-y-3'>
      {/* @ts-ignore */}
      <AllCarsHeader />
      {filteredCar?.map(
        (
          car: CarData // @ts-ignore
        ) => (
          <Suspense key={car.car_id} fallback='loading'>
            <CarCard {...car} />
          </Suspense>
        )
      )}
    </section>
  );
}
