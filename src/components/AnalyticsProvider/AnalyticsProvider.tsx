import { useEffect } from "react";
import { usePageTracking } from "../../hooks/usePageTracking";
import { useScrollTracking } from "../../hooks/useScrollTracking";

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

/**
 * Provider component that handles all analytics tracking
 * Wrap your app with this component to enable analytics
 */
function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  // Track page views on route changes
  usePageTracking();

  // Track scroll depth
  useScrollTracking();

  // Track time on page
  useEffect(() => {
    const startTime = Date.now();

    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent > 5) {
        // Only track if user spent more than 5 seconds
        import("../../utils/analytics").then(({ trackTimeOnPage }) => {
          trackTimeOnPage(timeSpent, window.location.pathname);
        });
      }
    };
  }, []);

  return <>{children}</>;
}

export default AnalyticsProvider;
