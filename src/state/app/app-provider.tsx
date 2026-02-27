// AppProvider.js
import React, { useState } from "react";
import { AppContext } from "./app-context";

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // The value prop is crucial; it holds the data and functions you want to share
  const contextValue = {
    theme,
    toggleTheme,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className={`app-theme-${theme}`}>{children}</div>
    </AppContext.Provider>
  );
};
