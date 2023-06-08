import Heading from '@/components/ui/heading';
import { SelectComp } from './select-comp';
import Switch from '@/components/ui/switch';

export default function CarTab() {
  return (
    <>
      <div>
        <Heading className='mb-2'>გარიგების ტიპი</Heading>
        <SelectComp />
      </div>
      <div>
        <Heading className='mb-2'>მწარმოებელი</Heading>
        <SelectComp />
      </div>
      <div>
        <Heading className='mb-2'>კატეგორია</Heading>
        <SelectComp />
      </div>
      <div className='h-px -m-6 bg-gray-200' />
      <div>
        <div className='flex items-center justify-between'>
          <Heading>ფასი</Heading> <Switch />
        </div>
      </div>
    </>
  );
}
