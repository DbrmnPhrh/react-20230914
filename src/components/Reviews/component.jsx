import { useSelector } from "react-redux";
import { Review } from "../Review/component";
import { ReviewEditorButton } from "../ReviewEditorButton/component";

export const Reviews = () => {

	const reviewIds = useSelector(state => state.review.ids);

  return (
		<div onClick={(e) => e.preventDefault()}>
			<ul>
				{reviewIds.length > 0 && reviewIds.map(id => (
					<li key={id}>
						<Review reviewId={id} />
					</li>
				))}
			</ul>
			<ReviewEditorButton />
		</div>
	)
}
