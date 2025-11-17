// Google Analytics tracking utilities

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * Initialize Google Analytics
 * Call this once when the app loads
 */
export const initGA = (measurementId: string) => {
  if (typeof window === 'undefined') {
    console.warn('Cannot initialize GA: window is undefined');
    return;
  }

  console.log('Initializing Google Analytics with ID:', measurementId);

  // Create gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.onload = () => console.log('GA script loaded successfully');
  script.onerror = () => console.error('Failed to load GA script');
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: any[]) {
    window.dataLayer?.push(args);
  };

  window.gtag('js', new Date().toISOString());
  window.gtag('config', measurementId, {
    page_path: window.location.pathname,
  });
  
  console.log('GA config sent:', { measurementId, page_path: window.location.pathname });
};

/**
 * Track page views
 * Call this on route changes
 */
export const trackPageView = (path: string, title?: string) => {
  if (typeof window === 'undefined') return;
  
  if (!window.gtag) {
    console.warn('gtag not available yet, retrying in 500ms...');
    setTimeout(() => trackPageView(path, title), 500);
    return;
  }

  console.log('Tracking page view:', { path, title: title || document.title });
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href,
  });
};

/**
 * Track custom events
 * @param eventName - Name of the event (e.g., 'button_click', 'form_submit')
 * @param parameters - Additional event parameters
 */
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  if (typeof window === 'undefined') return;
  
  if (!window.gtag) {
    console.warn('gtag not available for event:', eventName);
    return;
  }

  console.log('Tracking event:', eventName, parameters);
  window.gtag('event', eventName, parameters);
};

/**
 * Track social link clicks
 */
export const trackSocialClick = (platform: string, url: string) => {
  trackEvent('social_link_click', {
    social_platform: platform,
    link_url: url,
  });
};

/**
 * Track navigation clicks
 */
export const trackNavigation = (destination: string) => {
  trackEvent('navigation_click', {
    destination,
  });
};

/**
 * Track project card clicks
 */
export const trackProjectClick = (projectName: string, url?: string) => {
  trackEvent('project_click', {
    project_name: projectName,
    project_url: url,
  });
};

/**
 * Track carousel interactions
 */
export const trackCarouselInteraction = (
  action: 'next' | 'prev' | 'dot',
  section: string
) => {
  trackEvent('carousel_interaction', {
    interaction_type: action,
    section_name: section,
  });
};

/**
 * Track language changes
 */
export const trackLanguageChange = (fromLang: string, toLang: string) => {
  trackEvent('language_change', {
    from_language: fromLang,
    to_language: toLang,
  });
};

/**
 * Track button clicks
 */
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: location,
  });
};

/**
 * Track external link clicks
 */
export const trackExternalLink = (url: string, linkText?: string) => {
  trackEvent('external_link_click', {
    link_url: url,
    link_text: linkText,
  });
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', {
    scroll_percentage: depth,
  });
};

/**
 * Track time on page
 */
export const trackTimeOnPage = (seconds: number, page: string) => {
  trackEvent('time_on_page', {
    duration_seconds: seconds,
    page_path: page,
  });
};
