import classNames from "classnames";
import styles from "./styles.module.css";

export const Button = ({title, onClick, type, size, form, theme, disabled}) => (
  <button
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
)
