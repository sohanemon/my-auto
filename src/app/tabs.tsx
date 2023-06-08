'use client';
import * as Tabs from '@radix-ui/react-tabs';
import { ReactSVG } from 'react-svg';

export default function FilterTabs() {
  return (
    <>
      <Tabs.Root defaultValue='car' className='max-w-[220px]'>
        <Tabs.List className='grid grid-cols-3 bg-gray-100 divide-x-[1px] '>
          {data.map((el) => (
            <Tabs.Trigger
              className='grid h-11 place-items-center data-[state=active]:bg-white group'
              key={el.title}
              value={el.title}
            >
              <ReactSVG
                src={el.icon}
                className='group-data-[state=active]:text-themeRed'
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
