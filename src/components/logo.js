import { cn } from '@/utils/tw';

export default function Logo({ className, ...props }) {
  return (
    <p
      className={cn('inline border-l-4 border-amber-400 pl-2 text-base font-semibold uppercase md:text-2xl', className)}
      {...props}
    >
      Manage Courses
    </p>
  );
}
