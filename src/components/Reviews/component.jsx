import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REQUEST_STATUS } from "../../constants/statuses";
import { selectReviewIds, selectReviewLoadingStatus } from "../../redux/entities/review/selectors";
import { getReviews } from "../../redux/entities/review/thunks/get-reviews";
import { getUsers } from "../../redux/entities/user/thunks/get-users";
import { ReviewContainer } from "../Review/container";
import { ReviewEditorButton } from "../ReviewEditorButton/component";

export const Reviews = ({restaurantId}) => {

  const reviewIds = useSelector(selectReviewIds);
  const loadingStatus = useSelector(selectReviewLoadingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews(restaurantId));
    dispatch(getUsers());
  }, [restaurantId]);

  return (
		loadingStatus === REQUEST_STATUS.pending
			? <div>Loading...</div>
			: <div>
				<ul>
					{reviewIds.length > 0 && reviewIds.map(id => (
						<li key={id}>
							<ReviewContainer reviewId={id} />
						</li>
					))}
				</ul>
				<ReviewEditorButton />
			</div>
	)
}
