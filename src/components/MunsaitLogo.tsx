interface MunsaitLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const MunsaitLogo = ({ className = "", size = 'md' }: MunsaitLogoProps) => {
  const sizes = {
    sm: { height: 40 },
    md: { height: 48 },
    lg: { height: 56 }
  };

  const { height } = sizes[size];

  return (
    <img
      src="/munsait-logo.png"
      alt="Munsait"
      className={`w-auto ${className}`}
      style={{
        height: `${height}px`,
        backgroundColor: 'transparent',
        mixBlendMode: 'multiply'
      }}
    />
  );
};