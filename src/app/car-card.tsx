import Image from 'next/image';
import { ReactSVG } from 'react-svg';
import Specs from './specs';
import Options from './options';

export default function CarCard() {
  return (
    <section className='flex gap-4 p-4 bg-white rounded-2xl'>
      <Image
        className='rounded-lg'
        src={'/assets/car.png'}
        alt='car'
        width={182}
        height={144}
      />
      <div className='grow'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            {/* left side texts */}
            <p className='text-sm font-bold text-themeBlack'>
              LAND ROVER Range Rover Evoque
            </p>
            <p className='text-sm text-gray-400 font-75bold'>2013 წ</p>
          </div>
          <div className='flex items-center gap-4'>
            {/* right side texts */}
            <p className='text-xs font-bold leading-3 text-themeRed'>
              განბაჟება
            </p>
            <div className='w-2 h-2 bg-yellow-400 rounded-full' />
            <p className='text-xs text-gray-500 font-75bold'>აშშ</p>
          </div>
        </div>
        <div className='grid grid-cols-3'>
          {/* below section */}
          <div className='flex flex-wrap col-span-2 mt-5 mb-7 gap-y-3'>
            {/* spec section */}
            {spec.map((el) => (
              <Specs key={el.text} {...el} />
            ))}
          </div>
          <div className='flex items-center self-start mt-5 justify-self-end'>
            <p className='text-xl font-bold text-right text-gray-800'>69,507</p>
            <div className='p-1.5 bg-gray-200 rounded-full h-max aspect-square'>
              <Image
                src={'/assets/coin.svg'}
                alt='coin'
                width={13}
                height={12}
              />
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          {/*  end section*/}

          <div className='flex items-center gap-1'>
            {/* left */}
            <p className='text-xs font-semibold text-gray-500'>589 ნახვა</p>
            <div className='w-1 h-1 bg-gray-500 rounded-full' />
            <p className='text-xs font-semibold text-gray-500'>2 დღის წინ</p>
          </div>
          {/* right */}
          <Options />
        </div>
      </div>
    </section>
  );
}

const spec = [
  {
    icon: '/assets/union.svg',
    text: '1.8 დატ. ჰიბრიდი',
  },
  {
    icon: '/assets/speed.svg',
    text: '200 000 კმ',
  },
  {
    icon: '/assets/accelarator.svg',
    text: 'ავტომატიკა',
  },
  {
    icon: '/assets/stearing.svg',
    text: 'მარჯვენა',
  },
];
