// @ts-nocheck
import AllCars from './all-cars';
import Filters from './filters';

export default function Home() {
  return (
    <main className='grid max-w-5xl grid-cols-4 p-4 mx-auto'>
      {/* left side */}
      <Filters />
      {/* right side */}
      <AllCars />
    </main>
  );
}
