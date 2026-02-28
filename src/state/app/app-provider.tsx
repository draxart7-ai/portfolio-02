// AppProvider.js
import React, { useState } from "react";
import { AppContext } from "./app-context";
import { useMediaQuery } from "../../hooks/useMediaQuery/useMediaQuery";

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [theme, setTheme] = useState("light");
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");
  const isDesktop = !isMobile && !isTablet;

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // The value prop is crucial; it holds the data and functions you want to share
  const contextValue = {
    theme,
    toggleTheme,
    screen: {
      isMobile,
      isTablet,
      isDesktop,
    },
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className={`app-theme-${theme}`}>{children}</div>
    </AppContext.Provider>
  );
};
