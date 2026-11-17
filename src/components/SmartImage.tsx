import {useState} from 'react';
import {Trees} from 'lucide-react';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function SmartImage({src, alt, className = '', fallbackTitle}: SmartImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#1B4332] via-[#2D6A4F] to-[#52B788] text-white p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Trees className="w-9 h-9 mb-2 opacity-90" aria-hidden="true" />
        <span className="text-sm font-semibold tracking-tight opacity-95">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
