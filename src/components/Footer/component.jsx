import classNames from "classnames";
import styles from "./styles.module.css";

export const Footer = ({position}) => (
  <footer className={classNames(styles.root, position)}>
    <div className={classNames('margin-h-1', 'display-flex', 'justify-content-between', 'wide')}>
      <span>Contacts: 123 Imaginary Street, Dreamland City, Wonderland, ZIP: 56789</span>
      <span>Copyrights: © 2023 Dream Eats. All</span>
    </div>
  </footer>
)
