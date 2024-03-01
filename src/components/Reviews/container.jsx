import { useGetReviewsQuery } from '../../services/api';
import { Reviews } from './component';

export const ReviewsContainer = ({ restaurantId }) => {
	const {data: reviews, isFetching} = useGetReviewsQuery(restaurantId);

	return isFetching
  ? <div>Loading...</div>
  : <Reviews reviews={reviews} restaurantId={restaurantId} />
}
