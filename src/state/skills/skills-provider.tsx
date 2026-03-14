import { useState, ReactNode } from "react";

import { SkillsContext, SkillsContextType } from "./skills-context";

interface SkillsProviderProps {
  children: ReactNode;
}

export const SkillsProvider = ({ children }: SkillsProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenStyle = isOpen ? "isOpen" : "";

  const contextValue = {
    isOpen,
    setIsOpen,
    isOpenStyle,
  } as SkillsContextType;

  return (
    <SkillsContext.Provider value={contextValue}>
      {children}
    </SkillsContext.Provider>
  );
};
