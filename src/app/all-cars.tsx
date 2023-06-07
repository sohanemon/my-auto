import { Button } from '@/components/button';
import CarCard from './car-card';

export default function AllCars() {
  return (
    <section className='col-span-3 space-y-3'>
      <CarCard />
      <CarCard />
    </section>
  );
}
