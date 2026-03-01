import { useState, useEffect, MutableRefObject } from "react";

interface UseIntersectionObserverArgs {
  sectionRef: MutableRefObject<HTMLInputElement | null>;
}

export function useIntersectionObserver({
  sectionRef,
}: UseIntersectionObserverArgs) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observerCallback = (
      entries: {
        isIntersecting: boolean | ((prevState: boolean) => boolean);
      }[],
    ) => {
      entries.forEach(
        (entry: {
          isIntersecting: boolean | ((prevState: boolean) => boolean);
        }) => {
          // Update state based on the intersection status
          setIsVisible(entry.isIntersecting);

          // // Optional: stop observing once it has intersected once
          // if (entry.isIntersecting) {
          //   observer.unobserve(entry.target);
          // }
        },
      );
    };

    const options = {
      root: null, // defaults to the viewport
      rootMargin: "0px",
      threshold: 0.8, // 50% visibility
    };

    const observer = new IntersectionObserver(observerCallback, options);

    // Start observing the target element
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return isVisible;
}
