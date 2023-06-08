import Heading from '@/components/ui/heading';
import { SelectComp } from './select-comp';

export default function AllCarsHeader() {
  return (
    <div className='flex items-center justify-between'>
      <Heading className=''>176047 განცხადება</Heading>

      <div className='flex items-center gap-3'>
        <SelectComp placeholder='ბოლო 3 საათი' />
        <SelectComp placeholder='თარიღი კლებადი' />
      </div>
    </div>
  );
}
