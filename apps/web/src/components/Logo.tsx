import { cn } from '@/utils/cn';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div
      className={cn('text-xl font-medium flex gap-2 items-center', className)}
    >
      <img
        src="/logo.svg"
        className="max-h-8 rounded-md"
        alt="Openpanel logo"
      />
      openpanel.dev
    </div>
  );
}
