import { useEffect, useState } from 'react';

export function usePageLoad() {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return hasLoaded;
}
