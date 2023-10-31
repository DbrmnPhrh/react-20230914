import { useGetReviewsQuery } from '../../services/api';
import { Reviews } from './component';

export const ReviewsContainer = ({ restaurantId }) => {
	const {data: reviews, isSuccess: isReviewsLoaded} = useGetReviewsQuery(restaurantId);

	return !isReviewsLoaded
  ? <div>Loading...</div>
  : <Reviews reviews={reviews} restaurantId={restaurantId} />
}
