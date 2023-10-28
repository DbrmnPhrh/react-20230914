import { useState } from 'react'
import { REQUEST_STATUS } from '../../constants/statuses'
import { useMakeRequest } from '../../hooks/use-make-request'
import { postReview } from '../../redux/entities/review/thunks/post-review'
import { Button } from '../Button/component'
import { Modal } from '../Modal/component'
import { ReviewEditor } from './component'

export const ReviewEditorContainer = ({restaurantId}) => {
	const [isModalOpened, setIsModalOpened] = useState(false)

	const [createReviewStatus, createReview] = useMakeRequest(postReview);

	const onClose = () => setIsModalOpened(false)

	const handlerCheckTarget = e => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	return (
		<>
			{
				createReviewStatus === REQUEST_STATUS.pending
				? <div>Loading...</div>
				: <Button
						children='Add new review'
						onClick={() => setIsModalOpened(true)}
						type={'secondary'}
						size='medium'
					></Button>
			}
			{isModalOpened && (
				<Modal onClose={onClose} handlerCheckTarget={handlerCheckTarget}>
					<ReviewEditor
						onClose={onClose}
						onSubmit={(form) => {
							createReview({
								restaurantId,
								newReview: form,
							});
							setIsModalOpened(false);
						}}
					/>
				</Modal>
			)}
		</>
	)
}
