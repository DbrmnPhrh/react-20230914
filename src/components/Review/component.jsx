import classNames from "classnames";
import { UserContainer } from "../User/container";

export const Review = ({review}) => {
  return review
    ? <div className={classNames('display-flex')}><UserContainer userId={review.userId}/>: {review.text}</div>
    : null;
}
