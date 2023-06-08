'use client';
import * as Tabs from '@radix-ui/react-tabs';
import { ReactSVG } from 'react-svg';

export default function FilterTabs() {
  return (
    <>
      <Tabs.Root
        defaultValue='car'
        className='max-w-[220px] rounded-t-lg mt-5 overflow-hidden'
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
        <Tabs.Content value='car'>hush car</Tabs.Content>
        <Tabs.Content value='bike'>hush</Tabs.Content>
      </Tabs.Root>
    </>
  );
}

const data = [
  { title: 'car', icon: '/assets/filter/car.svg' },
  { title: 'tractor', icon: '/assets/filter/tractor.svg' },
  { title: 'bike', icon: '/assets/filter/bike.svg' },
];
