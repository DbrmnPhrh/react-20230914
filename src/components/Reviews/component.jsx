import { ReviewContainer } from '../Review/container'
import { ReviewEditorButton } from '../ReviewEditorButton/component'

export const Reviews = ({ reviewIds }) => {
	return (
		<div>
			<ul>
				{reviewIds.map(id => (
						<li key={id}>
							<ReviewContainer reviewId={id} />
						</li>
					))}
			</ul>
			<ReviewEditorButton />
		</div>
	)
}
