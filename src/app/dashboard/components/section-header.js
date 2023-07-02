import { cn } from '@/utils/tw';

export default function SectionHeader({ title, subtitle, cta }) {
  return (
    <header className="md:flex md:items-center md:justify-between md:gap-4">
      <div className={cn(cta && 'mb-4 flex-1 md:mb-0')}>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      {cta && cta}
    </header>
  );
}
