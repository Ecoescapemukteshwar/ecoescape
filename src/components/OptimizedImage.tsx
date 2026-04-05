import { useState } from "react";

interface OptimizedImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'loading' | 'fetchpriority'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  srcset?: string;
  sizes?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  srcset,
  sizes,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Calculate aspect ratio string for CSS
  const aspectRatio = width && height ? `${width} / ${height}` : undefined;

  return (
    <div 
      className={`relative overflow-hidden bg-muted/20 ${className}`} 
      style={{ 
        aspectRatio,
        width: width ? `${width}px` : '100%',
        maxWidth: '100%'
      }}
    >
      {isLoading && !error && (
        <div className="absolute inset-0 bg-secondary/30 animate-pulse flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src}
        srcSet={srcset}
        sizes={sizes}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        width={width}
        height={height}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setError(true);
        }}
        className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
          isLoading ? "scale-105 blur-sm opacity-0" : "scale-100 blur-0 opacity-100"
        } ${error ? "hidden" : ""}`}
        {...props}
      />
      {error && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-muted/10 p-4 text-center"
          role="alert"
          aria-live="polite"
        >
          <svg
            className="w-8 h-8 text-muted-foreground mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-muted-foreground text-xs font-medium">Image not available</span>
        </div>
      )}
    </div>
  );
}
