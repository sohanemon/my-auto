// @ts-nocheck
'use client';
import Loader from '@/components/loader';
import useFilter from '@/store/filter';
import AllCarsHeader from './all-cars-header';
import CarCard from './car-card';
import Pagination from '@/components/pagination';

export default function AllCars() {
  const cars: CarData[] = useFilter((s) => s.cars);
  const isLoading = useFilter((s) => s.isLoading);

  return (
    <section className='col-span-4 max-sm:divide-y-2 sm:space-y-3 sm:col-span-3 '>
      {/* @ts-ignore */}
      <AllCarsHeader />
      {isLoading ? (
        <Loader />
      ) : (
        cars?.map(
          (
            car: CarData // @ts-ignore
          ) => <CarCard key={car.car_id} {...car} />
        )
      )}
      <Pagination />
    </section>
  );
}
