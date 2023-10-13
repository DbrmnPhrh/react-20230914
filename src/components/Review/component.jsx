import { useSelector } from "react-redux";

export const Review = ({reviewId}) => {

  const review = useSelector(state => state.review.entities[reviewId]);
  const user = useSelector(state => state.user.entities[review.userId]);

  return <div>{user.name}: {review.text}</div>
}
