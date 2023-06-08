'use client';
import Heading from '@/components/ui/heading';
import * as Tabs from '@radix-ui/react-tabs';
import { ReactSVG } from 'react-svg';
import { SelectComp } from './select-comp';
import CarTab from './car-tab';

export default function FilterTabs() {
  return (
    <>
      <Tabs.Root
        defaultValue='car'
        className='max-w-[220px] rounded-t-lg mt-5 overflow-hidden bg-white shadow-lg'
      >
        <Tabs.List className='grid grid-cols-3 bg-gray-50 divide-x-[1px] divide-gray-200'>
          {data.map((el) => (
            <Tabs.Trigger
              className='grid border-b-2 border-gray-200 h-11 place-items-center aria-selected:bg-white group aria-selected:!border-b-themeRed '
              key={el.title}
              value={el.title}
            >
              <ReactSVG
                src={el.icon}
                className='text-themeGray group-aria-selected:text-themeRed'
              />
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <Tabs.Content value='car' className='p-6 pb-0 space-y-5'>
          <CarTab />
        </Tabs.Content>
        <Tabs.Content value='tractor'>tractor section</Tabs.Content>
        <Tabs.Content value='bike'>bike section</Tabs.Content>
      </Tabs.Root>
    </>
  );
}

const data = [
  { title: 'car', icon: '/assets/filter/car.svg' },
  { title: 'tractor', icon: '/assets/filter/tractor.svg' },
  { title: 'bike', icon: '/assets/filter/bike.svg' },
];
