import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/Theme";
import { Button } from "../Button/component";
import { Modal } from "../Modal/component";
import { Review } from "../Review/component";
import { ReviewEditor } from "../ReviewEditor/component";

export const Reviews = ({reviews}) => {
  const {theme} = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  return (
		<div onClick={(e) => e.preventDefault()}>
			<ul>
				{reviews.map(review => (
					<li key={review.id}>
						<Review review={review} />
					</li>
				))}
			</ul>
			<Button
				title='Leave review'
				onClick={(e) => setOpen(true)}
				type='primary'
        theme={theme}
			/>
			<Modal open={open} onClose={() => setOpen(false)}>
				<ReviewEditor />
			</Modal>
		</div>
	)
}
