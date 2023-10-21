import { useSelector } from 'react-redux'
import { REQUEST_STATUS } from '../../constants/statuses'
import { useRequest } from '../../hooks/use-request'
import { selectRestaurantReviewsById } from '../../redux/entities/restaurant/selectors'
import { getReviewsIfNotExist } from '../../redux/entities/review/thunks/get-reviews'
import { getUsersIfNotExist } from '../../redux/entities/user/thunks/get-users'
import { Reviews } from './component'

export const ReviewsContainer = ({ restaurantId }) => {
	const restaurantReviewIds = useSelector((state) => selectRestaurantReviewsById(state, restaurantId));
	const reviewsLoadingStatus = useRequest(getReviewsIfNotExist, restaurantId);
	const usersLoadingStatus = useRequest(getUsersIfNotExist);

	return reviewsLoadingStatus === REQUEST_STATUS.pending || usersLoadingStatus === REQUEST_STATUS.pending
  ? <div>Loading...</div>
  : <Reviews reviewIds={restaurantReviewIds} />
}
