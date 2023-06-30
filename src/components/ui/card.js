'use client';

import { cn } from '@/utils/tw';

const { forwardRef } = require('react');

const Card = forwardRef(({ children, className, ...rest }, ref) => (
  <div ref={ref} className={cn('overflow-hidden rounded-lg p-4', className)} {...rest}>
    {children}
  </div>
));

Card.displayName = 'Card';
export default Card;
