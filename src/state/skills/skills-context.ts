import { createContext, useContext } from "react";

export interface SkillsContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isOpenStyle: string;
}

export const SkillsContext = createContext<SkillsContextType>({
  isOpen: false,
  setIsOpen: () => {},
  isOpenStyle: "",
});

export const useSkills = () => {
  const context = useContext(SkillsContext);
  if (!context) {
    throw new Error(
      "useActiveElement must be used within an ActiveElementProvider",
    );
  }
  return context;
};
