import classNames from 'classnames'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Button } from '../Button/component'
import { ReviewEditor } from '../ReviewEditor/component'

export const ReviewEditorButton = () => {
	const [isModalOpened, setIsModalOpened] = useState(false)

  const handlerCheckTarget = e => {
    if (e.target === e.currentTarget) {
      setIsModalOpened(false);
    }
  }

	return (
		<>
			<Button
				title='Add new review'
				onClick={() => setIsModalOpened(true)}
				type={'primary'}
				size='medium'
			></Button>
			{isModalOpened &&
				createPortal(
					<div
						className={classNames('modal_background')}
            onClick={handlerCheckTarget}
					>
						<div className={classNames('modal_card')}>
							<ReviewEditor onClose={() => setIsModalOpened(false)}/>
						</div>
					</div>, document.getElementById('modal-container')
				)}
		</>
	)
}
