const { cn } = require('@/utils/tw');

function BaseIcon({ size = 'md', stroke = 'medium', fillColor, svgClassName, children, ...props }) {
  return (
    <i {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={fillColor || 'none'}
        viewBox="0 0 24 24"
        strokeWidth={cn(
          stroke == 'thinner' && 0.5,
          stroke == 'thin' && 1,
          stroke == 'medium' && 1.5,
          stroke == 'thick' && 2,
          stroke == 'thicker' && 4
        )}
        stroke="currentColor"
        className={cn(
          size == 'sm' && 'h-4 w-4',
          size == 'md' && 'h-6 w-6',
          size == 'lg' && 'h-8 w-8',
          size == '2xl' && 'h-16 w-16',
          svgClassName
        )}
      >
        {children}
      </svg>
    </i>
  );
}

export function CloseSidebarIcon(props) {
  return (
    <BaseIcon {...props} svgClassName="-rotate-90">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <path d="m9 16 3-3 3 3" />
    </BaseIcon>
  );
}

export function OpenSidebarIcon(props) {
  return (
    <BaseIcon {...props} svgClassName="-rotate-90">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <path d="m15 14-3 3-3-3" />
    </BaseIcon>
  );
}

export function XIcon(props) {
  return (
    <BaseIcon {...props}>
      <line x1="18" x2="6" y1="6" y2="18" />
      <line x1="6" x2="18" y1="6" y2="18" />
    </BaseIcon>
  );
}

export function HomeIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </BaseIcon>
  );
}

export function BookmarkIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </BaseIcon>
  );
}

export function GraduationCapIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </BaseIcon>
  );
}

export function ReceiptIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 17V7" />
    </BaseIcon>
  );
}

export function BarChartIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </BaseIcon>
  );
}

export function SettingsIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </BaseIcon>
  );
}

export function UsersIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M14 19a6 6 0 0 0-12 0" />
      <circle cx="8" cy="9" r="4" />
      <path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8" />
    </BaseIcon>
  );
}
