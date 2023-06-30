'use client';

import { cn } from '@/utils/tw';

const { forwardRef } = require('react');

const Label = forwardRef(({ className, ...props }, ref) => {
  return <label className={cn('block text-sm text-neutral-600', className)} ref={ref} {...props} />;
});

Label.displayName = 'Label';
export default Label;
