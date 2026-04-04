import { useEffect, useState } from 'react';

export function useScrollProgress(elementRef: React.RefObject<HTMLElement>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      const elementTop = rect.top;

      // Calculate progress from when top enters viewport to when bottom exits
      const totalScrollDistance = windowHeight + elementHeight;
      const scrolledPast = windowHeight - elementTop;
      const percentage = Math.max(0, Math.min(100, (scrolledPast / totalScrollDistance) * 100));

      setProgress(percentage);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [elementRef]);

  return progress;
}
