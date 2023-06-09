'use client';
import useCars from '@/store/cars';
import AllCarsHeader from './all-cars-header';
import CarCard from './car-card';
import { Suspense, useEffect, useLayoutEffect } from 'react';

export default function AllCars() {
  const cars = useCars((s) => s.cars);

  return (
    <section className='col-span-3 space-y-3'>
      {/* @ts-ignore */}
      <AllCarsHeader />
      {cars?.map(
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
