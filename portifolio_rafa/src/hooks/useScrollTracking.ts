import { useEffect, useRef } from 'react';
import { trackScrollDepth } from '../utils/analytics';

/**
 * Hook to track scroll depth
 * Tracks at 25%, 50%, 75%, and 100% scroll depth
 */
export const useScrollTracking = () => {
  const depthsTracked = useRef<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = Math.round(
        (scrollTop / (documentHeight - windowHeight)) * 100
      );

      // Track at key milestones
      const milestones = [25, 50, 75, 100];
      milestones.forEach((milestone) => {
        if (
          scrollPercentage >= milestone &&
          !depthsTracked.current.has(milestone)
        ) {
          depthsTracked.current.add(milestone);
          trackScrollDepth(milestone);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};
