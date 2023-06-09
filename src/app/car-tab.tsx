'use client';
import Heading from '@/components/ui/heading';
import { SelectComp } from './select-comp';
import Switch from '@/components/ui/switch';
import Input from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { use, useEffect } from 'react';
import useFilter from '@/store/filter';
import useManufacturer from '@/store/manufacturer';

export default function CarTab() {
  const getCategories = useFilter((s) => s.getCategories);
  const categories = useFilter((s) => s.categories);
  const manufacturers = useManufacturer((s) => s.manufacturers);
  useEffect(() => {
    getCategories();
  }, [getCategories]);

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
        <div className='flex items-center gap-1 mt-3'>
          <Input placeholder='დან' />
          <p>-</p>
          <Input placeholder='მდე' />
        </div>
      </div>
      <div className='grid h-16 px-6 -m-6 shadow-2xl place-items-center'>
        <Button className='w-full'>ძებნა 197,963</Button>
      </div>
    </>
  );
}
