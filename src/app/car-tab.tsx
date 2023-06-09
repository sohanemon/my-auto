'use client';
import { Button } from '@/components/ui/button';
import Heading from '@/components/ui/heading';
import Input from '@/components/ui/input';
import Switch from '@/components/ui/switch';
import useFilter from '@/store/filter';
import useManufacturer from '@/store/manufacturer';
import { SelectComp } from './select-comp';
import { useRef } from 'react';

export default function CarTab() {
  const categories = useFilter((s) => s.categories);
  const setSelectedPriceRange = useFilter((s) => s.setSelectedPriceRange);
  const manufacturers = useManufacturer((s) => s.manufacturers);
  const inputRef = useRef<HTMLFormElement>(null);

  function handleSubmit() {
    const form = inputRef.current;
    setSelectedPriceRange(form?.start.value, form?.end.value);
  }

  return (
    <>
      <div>
        <Heading className='mb-2'>გარიგების ტიპი</Heading>
        <SelectComp placeholder='იყიდება' />
      </div>
      <div>
        <Heading className='mb-2'>მწარმოებელი</Heading>
        <SelectComp
          placeholder='ყველა მწარმოებელი'
          data={manufacturers}
          type='manufactures'
        />
      </div>
      <div>
        <Heading className='mb-2'>კატეგორია</Heading>
        <SelectComp
          placeholder='ყველა კატეგორია'
          data={categories}
          type='categories'
        />
      </div>
      <div className='h-px -m-6 bg-gray-200' />
      <div>
        <div className='flex items-center justify-between'>
          <Heading>ფასი</Heading> <Switch />
        </div>
        <form ref={inputRef} className='flex items-center gap-1 mt-3'>
          <Input type='number' placeholder='დან' name='start' />
          <p>-</p>
          <Input type='number' placeholder='მდე' name='end' />
        </form>
      </div>
      <div className='grid h-16 px-6 -m-6 shadow-2xl place-items-center'>
        <Button onClick={handleSubmit} className='w-full'>
          ძებნა 197,963
        </Button>
      </div>
    </>
  );
}
