import React, { useContext, useState } from "react";

export const ThemeContext = React.createContext('default');

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('default');
  const [currentThemeIndex, setThemeIndex] = useState(0);
  const themes = ['default', 'dark', 'blue'];
  const switchTheme = () => {
    const newThemeIndex = (currentThemeIndex + 1) % themes.length;
    setThemeIndex(newThemeIndex);
    setTheme(themes[newThemeIndex])
  }

  return <ThemeContext.Provider value={{theme, switchTheme}}>{children}</ThemeContext.Provider>
}
