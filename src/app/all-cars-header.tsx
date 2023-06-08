import Heading from '@/components/ui/heading';
import { SelectComp } from './select-comp';

export default async function AllCarsHeader() {
  const res = await fetch('https://api2.myauto.ge/ka/cats/get');
  const categories = await res.json();
  return (
    <div className='flex items-center justify-between'>
      <Heading className=''>176047 განცხადება</Heading>

      <div className='flex items-center gap-3'>
        <SelectComp data={categories.data} placeholder='ბოლო 3 საათი' />
        <SelectComp placeholder='თარიღი კლებადი' />
      </div>
    </div>
  );
}
