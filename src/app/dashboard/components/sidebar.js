'use client';

import useClickOutside from '@/hooks/use-click-outside';
import useSidebarStore from '@/stores/sidebar-store';
import { cn } from '@/utils/tw';
import { useRef } from 'react';

export default function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useSidebarStore((state) => [state.isOpen, state.setIsOpen]);

  const sidebarRef = useRef(null);
  useClickOutside(sidebarRef, (e) => {
    if (e.target.closest('#close-sidebar-button')) {
      return;
    }

    isOpen && setIsOpen(false);
  });

  return (
    <aside
      ref={sidebarRef}
      className={cn(
        'fixed left-0 z-30 h-full w-full max-w-[300px] bg-white',
        'border-r border-neutral-300 transition duration-200',
        'md:relative md:left-auto md:top-auto',
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      )}
    >
      {children}
    </aside>
  );
}
