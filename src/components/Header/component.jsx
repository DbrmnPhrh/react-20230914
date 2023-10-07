import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";
import { ThemeSwitcher } from "../ThemeSwitcher/component";
import styles from "./styles.module.css";

export const Header = ({restaurantName, className}) => {
  const {theme} = useContext(ThemeContext);
  return <header className={classNames(styles.root, className, `theme_${theme}`)}>
    <div className={classNames(styles['title-container'])}>
      <h1>Welcome!</h1>
    </div>
    <div className={classNames(styles['theme-switcher-container'])}>
      <ThemeSwitcher />
    </div>
  </header>
}
