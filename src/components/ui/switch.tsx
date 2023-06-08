'use client';

import useFilter from '@/store/filter';
import { ReactSVG } from 'react-svg';

export default function Switch() {
  const { isDollar, setIsDollar } = useFilter();
  return (
    <div className='flex h-6 w-max'>
      <ReactSVG
        src='/assets/filter/gel.svg'
        className='grid h-full bg-red-500 rounded-full w-max aspect-square place-content-center'
      />
      <ReactSVG
        src='/assets/filter/dollar.svg'
        className='grid h-full bg-red-500 rounded-full w-max aspect-square place-content-center'
      />
    </div>
  );
}
