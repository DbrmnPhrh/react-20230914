import classNames from "classnames";
import styles from "./styles.module.css";

export const Header = ({restaurantName, className}) => (
    <header className={classNames(styles.root, className)}>
      <h1>Welcome to {restaurantName} restaurant!</h1>
    </header>
)
