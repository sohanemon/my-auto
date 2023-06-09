import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import cn from '@/util/cn';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 uppercase text-white',
  {
    variants: {
      variant: {
        default: 'bg-themeViolet hover:bg-themeViolet/80',
        'vip-plus': 'bg-themeYellow hover:bg-themeYellow/80',
        destructive:
          'bg-destructive hover:bg-destructive/80 text-destructive-foreground',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {props.children} {variant === 'vip-plus' && '+'}
    </div>
  );
}

export { Badge, badgeVariants };
