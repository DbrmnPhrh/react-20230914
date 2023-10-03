import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/Theme";

export const ThemeSwitcher = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  const [currentThemeIndex, setThemeIndex] = useState(0);
  const themes = ['default', 'dark', 'blue'];
  const switchTheme = () => {
    const newThemeIndex = (currentThemeIndex + 1) % themes.length;
    setThemeIndex(newThemeIndex);
    setTheme(themes[newThemeIndex])
  }

  return <button onClick={() => switchTheme()}>{themes[currentThemeIndex]}</button>
}
