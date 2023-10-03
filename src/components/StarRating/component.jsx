import classNames from "classnames";
import styles from "./styles.module.css";

export const StarRating = ({rating, starLength}) => {
  const roundRating = Math.round(rating);
  const stars = Array.from({length: (starLength ?? 5)}, (_, index) => (
    <span key={index} className={classNames(
      {
        [`${styles.star} ${styles.filled}`]: (index < roundRating),
        [styles.star]: (index >= roundRating),
      }
    )}>&#9733;</span>
  ))

  return <div className={classNames(styles.star-rating)}>{stars}</div>
}
