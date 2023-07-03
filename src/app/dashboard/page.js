import { BookmarkIcon, GraduationCapIcon, ReceiptIcon, UsersIcon } from '@/components/icons';
import Card from '@/components/ui/card';
import { cn } from '@/utils/tw';
import Link from 'next/link';
import SectionHeader from './components/section-header';

const OverviewData = [
  {
    icon: <GraduationCapIcon svgClassName="h-12 w-12 text-sky-400" />,
    href: '/dashboard/students',
    valueColor: 'text-sky-800',
    bgColor: 'bg-sky-50',
    title: 'Students',
    value: '243',
  },
  {
    icon: <BookmarkIcon svgClassName="h-12 w-12 text-fuchsia-400" />,
    href: '/dashboard/courses',
    valueColor: 'text-fuchsia-800',
    bgColor: 'bg-fuchsia-50',
    title: 'Courses',
    value: '13',
  },
  {
    icon: <ReceiptIcon svgClassName="h-12 w-12 text-amber-400" />,
    href: '/dashboard/payments',
    valueColor: 'text-amber-800',
    bgColor: 'bg-amber-50',
    title: 'Payments',
    value: '556K ₺',
  },
  {
    icon: <UsersIcon svgClassName="h-12 w-12 text-lime-400" />,
    href: '/dashboard/users',
    valueColor: 'text-lime-800',
    bgColor: 'bg-lime-50',
    title: 'Users',
    value: '69',
  },
];

export default function Page() {
  return (
    <section className="space-y-8">
      <SectionHeader
        title="Overview"
        subtitle="Welcome to your dashboard. Here, you can see all the important information you need to know."
      />
      <main>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {OverviewData.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              passHref
              className="rounded-lg transition duration-100 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
            >
              <Card
                className={cn(
                  'flex items-center justify-between',
                  'transition duration-150 hover:-translate-y-1 hover:brightness-[0.975]',
                  item.bgColor
                )}
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  {item.icon}
                  <p className={cn('font-medium', item.valueColor)}>{item.title}</p>
                </div>
                <p className={cn('text-2xl font-bold xl:text-4xl', item.valueColor)}>{item.value}</p>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </section>
  );
}
