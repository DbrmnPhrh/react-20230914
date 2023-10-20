import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { REQUEST_STATUS } from '../../constants/statuses'
import { selectReviewIds, selectReviewLoadingStatus } from '../../redux/entities/review/selectors'
import { getReviews } from '../../redux/entities/review/thunks/get-reviews'
import { getUsers } from '../../redux/entities/user/thunks/get-users'
import { Reviews } from './component'

export const ReviewsContainer = ({ restaurantId }) => {
	const reviewIds = useSelector(selectReviewIds);
	const loadingStatus = useSelector(selectReviewLoadingStatus);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getReviews(restaurantId))
		dispatch(getUsers())
	}, [restaurantId])

	return restaurantId ? (
		loadingStatus === REQUEST_STATUS.pending
      ? <div>Loading...</div>
      : <Reviews reviewIds={reviewIds} />
	) : null
}
