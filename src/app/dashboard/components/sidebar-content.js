'use client';

import {
  BarChartIcon,
  BookmarkIcon,
  GraduationCapIcon,
  HomeIcon,
  ReceiptIcon,
  SettingsIcon,
  XIcon,
} from '@/components/icons';
import Logo from '@/components/logo';
import Button from '@/components/ui/button';
import useSidebarStore from '@/stores/sidebar-store';
import { cn } from '@/utils/tw';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SidebarItems = [
  {
    icon: <HomeIcon />,
    label: 'Home',
    href: '/dashboard',
  },
  {
    icon: <BookmarkIcon />,
    label: 'Courses',
    href: '/dashboard/courses',
  },
  {
    icon: <GraduationCapIcon />,
    label: 'Students',
    href: '/dashboard/students',
  },
  {
    icon: <ReceiptIcon />,
    label: 'Payments',
    href: '/dashboard/payments',
  },
  {
    icon: <BarChartIcon />,
    label: 'Reports',
    href: '/dashboard/reports',
  },
  {
    icon: <SettingsIcon />,
    label: 'Settings',
    href: '/dashboard/settings',
  },
];

export default function SidebarContent() {
  const [setIsOpen] = useSidebarStore((state) => [state.setIsOpen]);
  const currentRoute = usePathname();

  return (
    <section className="flex h-full flex-col space-y-8 p-4">
      <header className="flex h-12 items-center justify-between p-4">
        <Link
          href="/"
          className="rounded-lg px-2 py-1 transition duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
        >
          <Logo className="md:text-lg" />
        </Link>
        <button className="p-2 text-neutral-400 md:hidden" id="close-sidebar-button" onClick={() => setIsOpen(false)}>
          <XIcon side="sm" stroke="thick" />
        </button>
      </header>
      <div className="text-center">
        <Image
          src="https://picsum.photos/1024"
          width={1024}
          height={1024}
          alt={`Profile photo of John Doe`}
          className="mx-auto aspect-square w-1/2 rounded-full"
        />
        <h2 className="mt-4 text-lg font-semibold">John Doe</h2>
        <p className="text-amber-500">Admin</p>
      </div>
      <main className="grow px-4">
        <div
          className={cn(
            'flex flex-col gap-1',
            '[&>*]:grid [&>*]:w-full [&>*]:grid-cols-12 [&>*]:items-center [&>*]:rounded-lg [&>*]:py-2',
            '[&>*]:transition [&>*]:duration-100',
            '[&>*]:text-neutral-800'
          )}
        >
          {SidebarItems.map((item, index) => {
            const isActive = currentRoute === item.href;

            return (
              <Link
                key={index}
                passHref
                href={item.href}
                className={cn(
                  'hover:bg-amber-100',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2',
                  isActive && 'bg-amber-300 !text-black hover:bg-amber-300'
                )}
              >
                <i className="col-span-2 col-start-4">{item.icon}</i>
                <p
                  className="
                  col-span-6 col-start-6
                "
                >
                  {item.label}
                </p>
              </Link>
            );
          })}
        </div>
      </main>
      <footer>
        <Button variant="anchor" className="w-full text-black">
          Logout
        </Button>
      </footer>
    </section>
  );
}
