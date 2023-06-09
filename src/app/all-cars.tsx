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
  const selectedCategory = useFilter((s) => s.selectedCategory);
  const selectedManufacturer = useFilter((s) => s.selectedManufacturer);

  const filteredByManufacturer: CarData[] = useMemo(() => {
    if (!selectedManufacturer) return cars;
    return cars.filter((car) => car.man_id == selectedManufacturer);
  }, [cars, selectedManufacturer]);

  const filteredByCategory: CarData[] = useMemo(() => {
    if (!selectedCategory) return filteredByManufacturer;
    return filteredByManufacturer.filter(
      (car) => car.category_id == selectedCategory
    );
  }, [filteredByManufacturer, selectedCategory]);

  const filteredBySorting: CarData[] = useMemo(() => {
    switch (sortingType) {
      // date inc
      case 'თარიღი კლებადი':
        return filteredByCategory?.sort(
          (a, b) => new Date(a.order_date) - new Date(b.order_date)
        );
      // date dec
      case 'თარიღი ზრდადი':
        return filteredByCategory?.sort(
          (a, b) => new Date(b.order_date) - new Date(a.order_date)
        );

      // price dec
      case 'ფასი ზრდადი':
        return filteredByCategory?.sort((a, b) => b.price - a.price);
      // price inc
      case 'ფასი კლებადი':
        return filteredByCategory?.sort((a, b) => a.price - b.price);
      // run inc
      case 'გარბენი კლებადი':
        return filteredByCategory?.sort((a, b) => a.car_run_km - b.car_run_km);
      // run dec
      case 'გარბენი ზრდადი':
        return filteredByCategory?.sort((a, b) => b.car_run_km - a.car_run_km);
      default:
        return filteredByCategory;
    }
  }, [filteredByCategory, sortingType]);

  return (
    <section className='col-span-3 space-y-3'>
      {/* @ts-ignore */}
      <AllCarsHeader />
      {filteredBySorting?.map(
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
