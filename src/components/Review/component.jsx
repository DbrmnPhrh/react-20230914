import classNames from "classnames";
import { useSelector } from "react-redux";
import { User } from "../User/component";

export const Review = ({reviewId}) => {

  const review = useSelector(state => state.review.entities[reviewId]);

  return <div  className={classNames('display-flex')}><User userId={review.userId}/>: {review.text}</div>
}
