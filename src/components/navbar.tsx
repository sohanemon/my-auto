'use client';
import useFilter from '@/store/filter';
import { useEffect } from 'react';
import { ReactSVG } from 'react-svg';

export default function Navbar() {
  const getCategories = useFilter((s) => s.getCategories);
  useEffect(() => {
    getCategories();
    return () => {};
  }, [getCategories]);

  return (
    <nav className='bg-white'>
      <div className='max-w-5xl p-4 mx-auto '>
        <ReactSVG src='/assets/logo.svg' />
      </div>
    </nav>
  );
}
