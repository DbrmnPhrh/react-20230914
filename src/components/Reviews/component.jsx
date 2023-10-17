import { ReviewContainer } from "../Review/container";
import { ReviewEditorButton } from "../ReviewEditorButton/component";

export const Reviews = ({reviewIds}) => {

  return (
		<div onClick={(e) => e.preventDefault()}>
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
