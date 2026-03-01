import { createContext, useContext } from "react";

export interface ActiveElementContextType {
  activeId: string | null;
  // Accept null because standard refs start as null
  register: (el: Element | null) => (() => void) | void;
}

export const ActiveElementContext = createContext<
  ActiveElementContextType | undefined
>({ activeId: "Intro", register: () => {} });

export const useActiveElementContext = () => {
  const context = useContext(ActiveElementContext);
  if (!context) {
    throw new Error(
      "useActiveElement must be used within an ActiveElementProvider",
    );
  }
  return context;
};
