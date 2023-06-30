'use client';

import { CloseSidebarIcon, OpenSidebarIcon } from '@/components/icons';
import useSidebarStore from '@/stores/sidebar-store';

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useSidebarStore((state) => [state.isOpen, state.setIsOpen]);

  return (
    <nav className="sticky top-0 h-12 border-b border-neutral-300">
      <div className="flex h-full items-center justify-between p-1">
        <button className="text-neutral-400 md:hidden" id="close-sidebar-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseSidebarIcon /> : <OpenSidebarIcon />}
        </button>
      </div>
    </nav>
  );
}
