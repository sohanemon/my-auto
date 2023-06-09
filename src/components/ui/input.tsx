import cn from '@/util/cn';
import { HTMLAttributes, InputHTMLAttributes } from 'react';

export default function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
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
