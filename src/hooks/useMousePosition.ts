import { useState, useEffect } from 'react';

interface MousePosition {
  x: number;
  y: number;
  relativeX: number;
  relativeY: number;
}

export function useMousePosition(ref: React.RefObject<HTMLElement>) {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0, relativeX: 0, relativeY: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setPosition({
        x,
        y,
        relativeX: (x / rect.width) * 100,
        relativeY: (y / rect.height) * 100
      });
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0, relativeX: 50, relativeY: 50 });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref]);

  return position;
}
