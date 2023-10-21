import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { REQUEST_STATUS } from '../../constants/statuses'
import { selectRequestStatus } from '../../redux/entities/request/selectros'
import { selectRestaurantReviewsById } from '../../redux/entities/restaurant/selectors'
import { getReviewsIfNotExist } from '../../redux/entities/review/thunks/get-reviews'
import { getUsersIfNotExist } from '../../redux/entities/user/thunks/get-users'
import { Reviews } from './component'

export const ReviewsContainer = ({ restaurantId }) => {
  const request = useRef();
	const restaurantReviewIds = useSelector((state) => selectRestaurantReviewsById(state, restaurantId));
	const loadingStatus = useSelector((state) => selectRequestStatus(state, request.current?.requestId));
	const dispatch = useDispatch();

	useEffect(() => {
		request.current = dispatch(getReviewsIfNotExist(restaurantId));

    return () => {
      request.current.abort();
      request.current = null;
    }
	}, [restaurantId])

  useEffect(() => {
		dispatch(getUsersIfNotExist());
  }, [])

	return loadingStatus === REQUEST_STATUS.pending
  ? <div>Loading...</div>
  : <Reviews reviewIds={restaurantReviewIds} />
}
