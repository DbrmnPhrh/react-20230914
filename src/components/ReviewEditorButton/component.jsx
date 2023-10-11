import { useState } from 'react'
import { Button } from '../Button/component'
import { Modal } from '../Modal/component'
import { ReviewEditor } from '../ReviewEditor/component'

export const ReviewEditorButton = () => {
	const [isModalOpened, setIsModalOpened] = useState(false)

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
					<ReviewEditor onClose={onClose} />
				</Modal>
			)}
		</>
	)
}
