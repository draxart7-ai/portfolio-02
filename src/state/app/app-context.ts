// AppContext.js
import { createContext, useContext } from "react";

// Create the context with a default value (optional, but good practice)
export const AppContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

// Create a custom hook for easier consumption (optional but recommended)
export const useAppContext = () => useContext(AppContext);
