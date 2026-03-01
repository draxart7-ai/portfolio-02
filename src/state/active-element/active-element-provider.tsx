import { useRef, useState, ReactNode } from "react";

import {
  ActiveElementContext,
  ActiveElementContextType,
} from "./active-element-context";

interface ActiveElementProviderProps {
  children: ReactNode;
}

export const ActiveElementProvider = ({
  children,
}: ActiveElementProviderProps) => {
  const [activeId, setActiveId] = useState("Intro");

  // 1. Define the observer once
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 2. ONLY trigger if the element is crossing the top edge
          if (entry.isIntersecting && entry.intersectionRatio > 0) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -85% 0px", threshold: 0 },
    ),
  );

  // Helper for children to register themselves
  const register = (el: Element) => {
    if (el) observer.current.observe(el);
    return () => el && observer.current.unobserve(el);
  };

  const contextValue = {
    activeId,
    register,
  } as ActiveElementContextType;

  return (
    <ActiveElementContext.Provider value={contextValue}>
      {children}
    </ActiveElementContext.Provider>
  );
};
