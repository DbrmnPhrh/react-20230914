import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";
import styles from "./styles.module.css";

export const Footer = ({className}) => {
  const {theme} = useContext(ThemeContext);
  return <footer className={classNames(styles.root, className, `theme_${theme}`)}>
    <div className={classNames('margin-h-1', 'display-flex', 'justify-content-between', 'wide')}>
      <span>Contacts: 123 Imaginary Street, Dreamland City, Wonderland, ZIP: 56789</span>
      <span>Copyrights: © 2023 Dream Eats. All</span>
    </div>
  </footer>
}
