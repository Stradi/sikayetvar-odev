'use client';

import { cn } from '@/utils/tw';

const { forwardRef } = require('react');

const InputError = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <span className={cn('text-sm text-red-500', className)} ref={ref} {...props}>
      {children}
    </span>
  );
});

InputError.displayName = 'InputError';
export default InputError;
