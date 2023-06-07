import Image from 'next/image';

export default function CarCard() {
  return (
    <section className='flex p-4 bg-white rounded-2xl'>
      <Image
        className='rounded-lg'
        src={'/assets/car.png'}
        alt='car'
        width={182}
        height={144}
      />
      <div className='grow'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <p className='text-sm font-bold text-themeBlack'>
              LAND ROVER Range Rover Evoque
            </p>
            <p className='text-sm text-gray-400 font-75bold'>2013 წ</p>
          </div>
          <div className='flex items-center '>
            <p className='text-xs font-bold leading-3 text-themeRed'>
              განბაჟება
            </p>
            <div className='w-2 h-2 bg-yellow-400 rounded-full' />
          </div>
        </div>
      </div>
    </section>
  );
}
