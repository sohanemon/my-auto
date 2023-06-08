'use client';
import useCars from '@/store/cars';
import AllCarsHeader from './all-cars-header';
import CarCard from './car-card';

export default function AllCars() {
  const { getCars, cars } = useCars();
  console.log('🛑 ~ AllCars ~ cars:', cars);

  getCars();

  return (
    <section className='col-span-3 space-y-3'>
      {/* @ts-ignore */}
      <AllCarsHeader />
      {cars?.map((car: CarData) => (
        // @ts-ignore
        <CarCard key={car.car_id} {...car} />
      ))}
    </section>
  );
}
