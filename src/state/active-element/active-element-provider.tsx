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
          // 2. If an element hits the center "strip", make it active
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
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
