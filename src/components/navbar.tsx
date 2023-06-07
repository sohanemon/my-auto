'use client';
import { ReactSVG } from 'react-svg';

export default function Navbar() {
  return (
    <nav className='mb-8 bg-white'>
      <div className='max-w-5xl p-4 mx-auto '>
        <ReactSVG src='/assets/logo.svg' />
      </div>
    </nav>
  );
}
