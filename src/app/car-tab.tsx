import Heading from '@/components/ui/heading';
import { SelectComp } from './select-comp';
import Switch from '@/components/ui/switch';
import Input from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default async function CarTab() {
  const resCat = await fetch('https://api2.myauto.ge/ka/cats/get');
  const categories = await resCat.json();
  const resMan = await fetch('https://static.my.ge/myauto/js/mans.json');
  const manufactures = await resMan.json();

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
          data={manufactures}
          type='manufactures'
        />
      </div>
      <div>
        <Heading className='mb-2'>კატეგორია</Heading>
        <SelectComp
          placeholder='ყველა კატეგორია'
          data={categories.data}
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
