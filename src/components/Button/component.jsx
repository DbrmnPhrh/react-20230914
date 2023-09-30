import classNames from "classnames";
import styles from "./styles.module.css";

export const Button = ({title, onClick, type, size, form, disabled}) => {

    return <button
      className={classNames(
        styles.root,
        styles[type],
        styles[size],
        styles[form],
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
