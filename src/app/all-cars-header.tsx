'use client';
import Heading from '@/components/ui/heading';
import { SelectComp } from './select-comp';
import useFilter from '@/store/filter';

export default function AllCarsHeader() {
  const total = useFilter((s) => s.total);
  return (
    <div className='flex items-center justify-between max-sm:hidden'>
      <Heading className=''>{total} განცხადება</Heading>

      <div className='flex items-center gap-3'>
        <SelectComp
          data={['1h', '2h', '3h', '1d', '2d', '3d', '1w', '2w', '3w']}
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
