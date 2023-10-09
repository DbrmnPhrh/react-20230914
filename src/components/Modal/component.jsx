import classNames from 'classnames';
import { createPortal } from 'react-dom';
import { Button } from '../Button/component';
import styles from "./styles.module.css";

export const Modal = ({ children, onClose, handlerCheckTarget }) => {
	return createPortal(
		<div
			className={classNames(styles.modalBackground)}
			onClick={handlerCheckTarget}
		>
			<div className={classNames(styles.modalCard)}>
				<div className={classNames(styles.closeButton, 'margin-b-2')}>
					<Button
						children='X'
						onClick={onClose}
						type={'primary'}
						size='close'
					></Button>
				</div>
				{children}
			</div>
		</div>,
		document.getElementById('modal-container')
	)
}
