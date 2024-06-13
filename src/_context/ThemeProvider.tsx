import React, { useState } from "react";

export const ThemeContext = React.createContext("light");
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  document.documentElement.dataset.theme = theme;
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    if (
      document.documentElement.dataset.theme !== newTheme
    ) {
      document.documentElement.dataset.theme = newTheme;
      setTheme(newTheme);
      console.log(theme, newTheme);
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
