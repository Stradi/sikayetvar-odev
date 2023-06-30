'use client';

const { cn } = require('@/utils/tw');
const { forwardRef } = require('react');

const Input = forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex w-full rounded-lg border border-neutral-300 px-4 py-2 text-sm',
        'transition duration-100',
        'hover:border-neutral-400',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = 'Input';
export default Input;
