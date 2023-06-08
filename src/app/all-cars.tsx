import AllCarsHeader from './all-cars-header';
import CarCard from './car-card';

export default async function AllCars() {
  const res = await fetch('https://api2.myauto.ge/ka/products/');
  const data = await res.json();
  const cars = data.data.items;

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
