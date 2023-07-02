import { cn } from '@/utils/tw';

export default function SectionHeader({ title, subtitle, cta }) {
  return (
    <header className="flex items-center justify-between gap-4">
      <div className={cn(cta && 'flex-1')}>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      {cta && cta}
    </header>
  );
}
