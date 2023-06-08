import cn from '@/util/cn';
import { HTMLAttributes } from 'react';

export default function Input({
  className,
  ...props
}: HTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'w-full border rounded-lg h-10 pl-[10px] outline-themeGray border-gray-200 ',
        className
      )}
      {...props}
    />
  );
}
