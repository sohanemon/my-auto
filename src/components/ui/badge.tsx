import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import cn from '@/util/cn';

const badgeVariants = cva(
  'inline-flex items-center rounded-md sm:rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 uppercase text-white',
  {
    variants: {
      variant: {
        vip: 'bg-themeViolet hover:bg-themeViolet/80',
        'vip-plus': 'bg-themeYellow hover:bg-themeYellow/80',
        's-vip': 'bg-themeYellow/50 hover:bg-themeYellow/40',
      },
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  const innerText = React.useMemo(() => {
    switch (variant) {
      case 'vip-plus':
        return 'vip +';
      case 'vip':
        return 'vip';
      case 's-vip':
        return 's-vip';
      default:
        break;
    }
  }, [variant]);
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {innerText}
    </div>
  );
}

export { Badge, badgeVariants };
