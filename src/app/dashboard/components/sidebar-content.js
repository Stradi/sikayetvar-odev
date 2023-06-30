'use client';

import { XIcon } from '@/components/icons';
import Logo from '@/components/logo';
import useSidebarStore from '@/stores/sidebar-store';
import Link from 'next/link';

export default function SidebarContent() {
  const [setIsOpen] = useSidebarStore((state) => [state.setIsOpen]);

  return (
    <section className="h-full">
      <header className="flex h-12 items-center justify-between p-4">
        <Link href="/">
          <Logo className="md:text-lg" />
        </Link>
        <button className="p-2 text-neutral-400 md:hidden" id="close-sidebar-button" onClick={() => setIsOpen(false)}>
          <XIcon side="sm" stroke="thick" />
        </button>
      </header>
    </section>
  );
}
