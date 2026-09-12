type LogoMarkProps = {
  className?: string;
  light?: boolean;
};

export function LogoMark({ className = 'w-12 h-12', light = false }: LogoMarkProps) {
  return (
    <img
      src="/logo.png"
      alt="EduScape AI Logo"
      className={className}
      style={light ? { filter: 'brightness(0) invert(1)' } : undefined}
    />
  );
}
