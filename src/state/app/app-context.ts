import { createContext, useContext } from "react";

export const AppContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
  screen: {
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  },
});

export const useAppContext = () => useContext(AppContext);
