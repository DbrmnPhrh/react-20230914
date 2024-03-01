import { useState } from 'react'
import { usePostReviewMutation } from '../../services/api'
import { Button } from '../Button/component'
import { Modal } from '../Modal/component'
import { ReviewEditor } from './component'

export const ReviewEditorContainer = ({restaurantId}) => {
	const [isModalOpened, setIsModalOpened] = useState(false)

	const [createReview, { isLoading }] = usePostReviewMutation();

	const onClose = () => setIsModalOpened(false)

	const handlerCheckTarget = e => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	return (
		<>
			{
				isLoading
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
