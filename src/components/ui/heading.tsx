import cn from '@/util/cn';
import { HTMLAttributes } from 'react';

export default function Heading({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        'font-semibold text-xs tracking-wider text-themeBlack',
        className
      )}
      {...props}
    />
  );
}
