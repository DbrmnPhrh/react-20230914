import { Review } from '../Review/component';
import { ReviewEditorContainer } from '../ReviewEditor/container';

export const Reviews = ({ reviews, restaurantId }) => (
	<div>
		<ul>
			{reviews.map(review => (
					<li key={review.id}>
						<Review review={review} />
					</li>
				))}
		</ul>
		<ReviewEditorContainer restaurantId={restaurantId}/>
	</div>
)
