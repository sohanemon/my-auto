// @ts-nocheck
'use client';
import Heading from '@/components/ui/heading';
import useManufacturer from '@/store/manufacturer';
import { manFetcher } from '@/util/fetcher';
import Image from 'next/image';
import { Suspense, useEffect, useState } from 'react';
import Options from './options';
import Specs from './specs';
import { Badge } from '@/components/ui/badge';
import { ReactSVG } from 'react-svg';

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
      text: fuel_type_id == 1 ? 'gas' : fuel_type_id == 2 ? 'petrol' : 'hybrid',
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
    <section className='flex gap-4 p-4 bg-white max-sm:flex-wrap sm:rounded-2xl'>
      <div className='sm:hidden'>
        <Badge className='mr-1 sm:hidden' variant={'vip-plus'} />
        <Heading className='inline-block sm:hidden'>
          {manufacturer?.man_name} {model?.model_name}
        </Heading>
        <p className='inline-block ml-2 text-sm text-gray-400 sm:hidden'>
          {prod_year} წ
        </p>
        <div className='flex items-center self-start gap-1 mt-5 sm:hidden justify-self-end'>
          <p className='text-xl font-bold text-right text-gray-800'>
            {price_value}
          </p>
          <div className='p-1.5 bg-gray-200 rounded-full h-max aspect-square'>
            <Image src={'/assets/coin.svg'} alt='coin' width={13} height={12} />
          </div>
        </div>
      </div>
      <div className='relative max-sm:grow max-sm:basis-full'>
        <Image
          placeholder='blur'
          className='object-cover w-full rounded-lg max-sm:h-60'
          src={`https://static.my.ge/myauto/photos/${photo}/thumbs/${car_id}_1.jpg?v=${photo_ver}`}
          alt='car'
          width={182}
          height={144}
        />
        <ReactSVG
          src={'/assets/favorite.svg'}
          alt='love'
          width={19}
          height={16}
          className='absolute text-white right-4 top-4'
        />
      </div>
      <div className='grow'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            {/* left side texts */}
            <Suspense fallback='loading'>
              <Heading className='max-sm:hidden'>
                {manufacturer?.man_name} {model?.model_name}
              </Heading>
            </Suspense>
            <p className='text-sm text-gray-400 max-sm:hidden'>{prod_year} წ</p>
          </div>
          <div className='flex items-center gap-4 max-sm:hidden'>
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
          <div className='flex items-center self-start gap-1 mt-5 max-sm:hidden justify-self-end'>
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
            <Badge variant={'vip-plus'} className='max-sm:hidden' />
            <Image
              src={'/assets/hot.svg'}
              alt='fire'
              width={11}
              height={12}
              className='mb-1 sm:hidden'
            />
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
