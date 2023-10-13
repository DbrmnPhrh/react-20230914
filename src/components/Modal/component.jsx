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
				<div className={classNames('margin-b-2', 'wide', 'display-flex', 'justify-content-end')}>
					<Button
						children='X'
						onClick={onClose}
						type={'primary'}
						size='small'
						className={styles.closeButton}
					></Button>
				</div>
				{children}
			</div>
		</div>,
		document.getElementById('modal-container')
	)
}
