'use client';
import useFilter from '@/store/filter';
import { useEffect } from 'react';
import { ReactSVG } from 'react-svg';

export default function Navbar() {
  const getCategories = useFilter((s) => s.getCategories);
  const getCars = useFilter((s) => s.getCars);
  useEffect(() => {
    getCategories();
    getCars();
    return () => {};
  }, [getCars, getCategories]);

  return (
    <nav className='bg-white'>
      <div className='max-w-5xl p-4 mx-auto '>
        <ReactSVG src='/assets/logo.svg' />
      </div>
    </nav>
  );
}
