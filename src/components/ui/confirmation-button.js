import useClickOutside from '@/hooks/use-click-outside';
import { cn } from '@/utils/tw';
import { useRef, useState } from 'react';
import Button from './button';

export default function ConfirmationButton({ className, children, onConfirm, ...props }) {
  const [isClickedOnce, setIsClickedOnce] = useState(false);
  const buttonRef = useRef(null);

  useClickOutside(buttonRef, () => {
    setIsClickedOnce(false);
  });

  function onClick() {
    if (isClickedOnce) {
      onConfirm?.();
    } else {
      setIsClickedOnce(true);
    }
  }

  return (
    <Button
      ref={buttonRef}
      onClick={onClick}
      className={cn(
        isClickedOnce && 'bg-red-500 text-white ring-red-600',
        isClickedOnce && 'hover:bg-red-600 hover:ring-red-700',
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
