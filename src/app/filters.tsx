import Image from 'next/image';
import FilterTabs from './tabs';

export default function Filters() {
  return (
    <section className='pt-3'>
      <div className='flex items-center gap-2 font-semibold'>
        {/* bread camb */}
        <p className='text-xs text-gray-500 '>მთავარი</p>
        <Image
          src={'/assets/filter/arrow.svg'}
          alt='arrow'
          width={6}
          height={3}
        />
        <p className='text-xs text-gray-500'>ძიება</p>
        <Image
          src={'/assets/filter/arrow.svg'}
          alt='arrow'
          width={6}
          height={3}
        />
        <p className='text-xs text-themeRed'>იყიდება</p>
      </div>
      <FilterTabs />
    </section>
  );
}
