import { useState } from 'react'
import { useMakeRequest } from '../../hooks/use-make-request'
import { postReview } from '../../redux/entities/review/thunks/post-review'
import { Button } from '../Button/component'
import { Modal } from '../Modal/component'
import { ReviewEditor } from '../ReviewEditor/component'

export const ReviewEditorButton = ({restaurantId}) => {
	const [isModalOpened, setIsModalOpened] = useState(false)


	const [creatingReviewStatus, createNewReview] = useMakeRequest(postReview);

	const onClose = () => setIsModalOpened(false)

	const handlerCheckTarget = e => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	return (
		<>
			<Button
				children='Add new review'
				onClick={() => setIsModalOpened(true)}
				type={'secondary'}
				size='medium'
			></Button>
			{isModalOpened && (
				<Modal onClose={onClose} handlerCheckTarget={handlerCheckTarget}>
					<ReviewEditor onClose={onClose} createNewReview={createNewReview} restaurantId={restaurantId}/>
				</Modal>
			)}
		</>
	)
}
