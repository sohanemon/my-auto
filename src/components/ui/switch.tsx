'use client';

import useFilter from '@/store/filter';
import { ReactSVG } from 'react-svg';

export default function Switch() {
  const { isDollar, toggleCurrency } = useFilter();

  return (
    <div
      className='flex h-6 rounded-full cursor-pointer w-max ring-1 ring-gray-200'
      onClick={toggleCurrency}
    >
      <ReactSVG
        src='/assets/filter/gel.svg'
        className={`grid h-full text-themeGray rounded-full w-max aspect-square place-content-center ${
          !isDollar ? 'bg-themeBlack text-white' : ''
        }`}
      />
      <ReactSVG
        src='/assets/filter/dollar.svg'
        className={`grid h-full text-themeGray rounded-full w-max aspect-square place-content-center ${
          isDollar ? 'bg-themeBlack text-white' : ''
        }`}
      />
    </div>
  );
}
