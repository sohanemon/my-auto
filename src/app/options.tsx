'use client';
import { ReactSVG } from 'react-svg';

export default function Options() {
  return (
    <div className='flex items-center gap-4'>
      {option.map(({ icon, mobileOnly }) => {
        if (mobileOnly) return;
        return <ReactSVG src={icon} key={icon} />;
      })}
    </div>
  );
}

const option = [
  {
    icon: '/assets/edit.svg',
  },
  {
    icon: '/assets/box.svg',
  },
  {
    icon: '/assets/favorite.svg',
    mobileOnly: true,
  },
];
