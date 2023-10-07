import { Review } from "../Review/component";
import { ReviewEditorButton } from "../ReviewEditorButton/component";

export const Reviews = ({reviews}) => {

  return (
		<div onClick={(e) => e.preventDefault()}>
			<ul>
				{reviews.map(review => (
					<li key={review.id}>
						<Review review={review} />
					</li>
				))}
			</ul>
			<ReviewEditorButton />
		</div>
	)
}
