import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";
import styles from "./styles.module.css";

export const Button = ({title, onClick, type, size, form, disabled}) => {
  const {theme} = useContext(ThemeContext);

  return <button
      className={classNames(
        styles.root,
        styles[type],
        styles[size],
        styles[form],
        `theme_${theme}`,
        {
          [styles.disabled]: disabled,
        },
      )}
      onClick={onClick}
      disabled={disabled}
  >
    {title}
  </button>
}
