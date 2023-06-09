// @ts-nocheck
'use client';
import useCars from '@/store/cars';
import useFilter from '@/store/filter';
import { Suspense, useMemo } from 'react';
import AllCarsHeader from './all-cars-header';
import CarCard from './car-card';
import { isHourOld } from '@/util/period-tools';

export default function AllCars() {
  const cars: CarData[] = useCars((s) => s.cars);
  const sortingType = useFilter((s) => s.sortingType);
  const selectedCategory = useFilter((s) => s.selectedCategory);
  const selectedManufacturer = useFilter((s) => s.selectedManufacturer);
  const selectedPeriod = useFilter((s) => s.selectedPeriod);
  const selectedPriceRange = useFilter((s) => s.selectedPriceRange);

  const filteredByPriceRange: CarData[] = useMemo(() => {
    if (!selectedPriceRange[0] || !selectedPriceRange[1]) return cars;
    return cars.filter(
      (car) =>
        car.price_value >= selectedPriceRange[0] &&
        car.price_value <= selectedPriceRange[1]
    );
  }, [cars, selectedPriceRange]);

  const filteredByPeriod: CarData[] = useMemo(() => {
    if (!selectedPeriod) return filteredByPriceRange;
    return filteredByPriceRange.filter((car) =>
      isHourOld(car.order_date, selectedPeriod)
    );
  }, [filteredByPriceRange, selectedPeriod]);

  const filteredByManufacturer: CarData[] = useMemo(() => {
    if (!selectedManufacturer) return filteredByPeriod;
    return filteredByPeriod.filter((car) => car.man_id == selectedManufacturer);
  }, [filteredByPeriod, selectedManufacturer]);

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
    <section className='col-span-4 max-sm:divide-y-2 sm:space-y-3 sm:col-span-3 '>
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
