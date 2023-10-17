import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/review/selectors";
import { User } from "../User/component";

export const Review = ({reviewId}) => {

  const review = useSelector(state => selectReviewById(state, reviewId));

  return <div  className={classNames('display-flex')}><User userId={review.userId}/>: {review.text}</div>
}
