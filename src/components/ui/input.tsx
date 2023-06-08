import cn from '@/util/cn';
import { HTMLAttributes } from 'react';

export default function Input({
  className,
  ...props
}: HTMLAttributes<HTMLInputElement>) {
  return <input className={cn('', className)} {...props} />;
}
