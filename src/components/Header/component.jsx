import classNames from "classnames";
import styles from "./styles.module.css";

export const Header = ({restaurantName, position}) => (
    <header className={classNames(styles.root, position)}>
      <h1>Welcome to {restaurantName} restaurant!</h1>
    </header>
)
