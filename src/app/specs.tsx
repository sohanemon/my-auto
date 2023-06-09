'use client';

import { ReactSVG } from 'react-svg';

interface SpecType {
  icon: string;
  text: string;
}

export default function Specs({ icon, text }: SpecType) {
  return (
    <>
      <div className='flex items-center gap-3 basis-1/2'>
        <ReactSVG src={icon} className='max-sm:hidden' />
        <p className='text-sm font-semibold text-themeBlack'>{text}</p>
      </div>
    </>
  );
}
