export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
interface WindowWithGtag extends Window {
  gtag: (
    command: string,
    targetId: string,
    config?: Record<string, unknown>,
  ) => void;
}

export const pageview = (url: string) => {
  if (
    typeof window !== "undefined" &&
    (window as unknown as WindowWithGtag).gtag
  ) {
    (window as unknown as WindowWithGtag).gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (
    typeof window !== "undefined" &&
    (window as unknown as WindowWithGtag).gtag
  ) {
    (window as unknown as WindowWithGtag).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
