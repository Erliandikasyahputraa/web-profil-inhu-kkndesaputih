import { icons } from 'lucide-react';
import { cn } from '../../lib/utils';

export type AppIconName = keyof typeof icons;

interface AppIconProps extends React.SVGProps<SVGSVGElement> {
  name: AppIconName;
  size?: number | string;
}

export function AppIcon({ name, className, size = 24, ...props }: AppIconProps) {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    return null;
  }

  return <LucideIcon size={size} className={cn(className)} {...props} />;
}
