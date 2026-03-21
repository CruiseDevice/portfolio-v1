import { useState, useEffect, useRef } from 'react';

export const useScrollPosition = (): number => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollPosition(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
};

/**
 * Hook that returns whether the header should be in compact mode.
 * Uses hysteresis to prevent wobbling at the scroll threshold.
 */
export const useHeaderCompact = (threshold: number = 50): boolean => {
  const [isCompact, setIsCompact] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const scrollDirection = scrollY > lastScrollY.current ? 'down' : 'up';

          // Hysteresis: different thresholds for expanding vs collapsing
          const collapseThreshold = threshold;
          const expandThreshold = threshold - 20; // 20px hysteresis buffer

          if (scrollDirection === 'down' && scrollY > collapseThreshold) {
            setIsCompact(true);
          } else if (scrollDirection === 'up' && scrollY < expandThreshold) {
            setIsCompact(false);
          }

          lastScrollY.current = scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isCompact;
};
