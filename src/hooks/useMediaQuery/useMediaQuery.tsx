import { useState, useEffect } from "react";

/**
 * Custom hook to track the state of a CSS media query.
 * @param query - The media query string (e.g., "(max-width: 768px)")
 * @returns boolean - Whether the media query matches.
 */

export function useMediaQuery(query: string): boolean {
  // Initial state logic to handle SSR or initial load
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media: MediaQueryList = window.matchMedia(query);

    // Update state if the query matches differently than our initial state
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Explicitly type the event as MediaQueryListEvent
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query, matches]);

  return matches;
}
