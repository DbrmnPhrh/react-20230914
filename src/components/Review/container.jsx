import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/review/selectors";
import { Review } from "./component";

export const ReviewContainer = ({reviewId}) => {
  const review = useSelector(state => selectReviewById(state, reviewId));
  return <Review review={review}/>
}
