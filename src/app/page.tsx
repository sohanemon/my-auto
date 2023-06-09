// @ts-nocheck
import Loader from '@/components/loader';
import AllCars from './all-cars';
import Filters from './filters';

export default function Home() {
  return (
    <main className='grid max-w-5xl grid-cols-4 mx-auto sm:p-4'>
      <Loader />
      {/* left side */}
      <Filters />
      {/* right side */}
      <AllCars />
    </main>
  );
}
