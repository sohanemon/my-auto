import Heading from '@/components/ui/heading';
import { SelectComp } from './select-comp';
import Switch from '@/components/ui/switch';
import Input from '@/components/ui/input';

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
        <div className='flex items-center gap-1 mt-3'>
          <Input placeholder='დან' />
          <p>-</p>
          <Input placeholder='მდე' />
        </div>
      </div>
    </>
  );
}
