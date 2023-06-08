// @ts-nocheck
'use client';
import useManufacturer from '@/store/manufacturer';
import { manFetcher } from '@/util/fetcher';
import Image from 'next/image';
import { Suspense, useEffect, useState } from 'react';
import Options from './options';
import Specs from './specs';

export default function CarCard({
  photo,
  car_id,
  right_wheel,
  views,
  photo_ver,
  man_id,
  car_run_km,
  prod_year,
  gear_type_id,
  fuel_type_id,
  price_value,
  model_id,
}: CarData) {
  const [models, setModels] = useState([]);
  const [manufacturers, setManufacturers] = useManufacturer((s) => [
    s.manufacturers,
    s.setManufacturers,
  ]);
  const spec = [
    {
      icon: '/assets/union.svg',
      text: fuel_type_id == 1 ? 'gas' : fuel_type_id == 2 ? 'petrol' : 'diesel',
    },
    {
      icon: '/assets/speed.svg',
      text: `${car_run_km} კმ`,
    },
    {
      icon: '/assets/accelarator.svg',
      text:
        gear_type_id == 1
          ? 'manual'
          : gear_type_id == 2
          ? 'automatic'
          : 'tiptronic',
    },
    {
      icon: '/assets/stearing.svg',
      text: right_wheel ? 'right' : 'left',
    },
  ];
  useEffect(() => {
    manFetcher().then((data) => setManufacturers(data));
    fetch(`https://api2.myauto.ge/ka/getManModels?man_id=${man_id}`)
      .then((res) => res.json())
      .then((data) => setModels(data.data));
  }, [man_id, setManufacturers]);

  const manufacturer = manufacturers?.find((el) => el.man_id == man_id);
  const model = models.find((el) => el.model_id == model_id);

  return (
    <section className='flex gap-4 p-4 bg-white rounded-2xl'>
      <Image
        className='rounded-lg'
        src={`https://static.my.ge/myauto/photos/${photo}/thumbs/${car_id}_1.jpg?v=${photo_ver}`}
        alt='car'
        width={182}
        height={144}
      />
      <div className='grow'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            {/* left side texts */}
            <Suspense fallback='loading'>
              <p className='text-sm font-bold text-themeBlack'>
                {manufacturer?.man_name} {model?.model_name}
              </p>
            </Suspense>
            <p className='text-sm text-gray-400 font-75bold'>{prod_year} წ</p>
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
            <p className='text-xl font-bold text-right text-gray-800'>
              {price_value}
            </p>
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
            <p className='text-xs font-semibold text-gray-500'>{views} ნახვა</p>
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
