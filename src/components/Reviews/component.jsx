import { ReviewContainer } from '../Review/container';
import { ReviewEditorContainer } from '../ReviewEditor/container';

export const Reviews = ({ reviewIds, restaurantId }) => (
	<div>
		<ul>
			{reviewIds.map(id => (
					<li key={id}>
						<ReviewContainer reviewId={id} />
					</li>
				))}
		</ul>
		<ReviewEditorContainer restaurantId={restaurantId}/>
	</div>
)
