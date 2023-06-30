const { cn } = require('@/utils/tw');
const { forwardRef } = require('react');

const Button = forwardRef(({ variant, disabled, className, ...props }, ref) => {
  return (
    <button
      className={cn(
        'rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-white',
        'transition duration-100',
        'hover:opacity-90',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2',
        disabled && 'pointer-events-none cursor-not-allowed opacity-50',
        variant === 'anchor' && 'bg-transparent p-2 text-amber-500 underline',
        className
      )}
      disabled={disabled}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = 'Button';
export default Button;
