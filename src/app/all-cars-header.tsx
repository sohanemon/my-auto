import Heading from '@/components/ui/heading';
import { SelectComp } from './select-comp';

export default function AllCarsHeader() {
  return (
    <div className='flex items-center justify-between max-sm:hidden'>
      <Heading className=''>176047 განცხადება</Heading>

      <div className='flex items-center gap-3'>
        <SelectComp
          data={[1, 2, 3, 6, 12]}
          type='period'
          placeholder='ბოლო 1 საათი'
        />
        <SelectComp
          data={sortingConst}
          type='sorting'
          placeholder='თარიღი კლებადი'
        />
      </div>
    </div>
  );
}

const sortingConst = [
  'თარიღი კლებადი',
  'თარიღი ზრდადი',
  'ფასი კლებადი',
  'ფასი ზრდადი',
  'გარბენი კლებადი',
  'გარბენი ზრდადი',
];
