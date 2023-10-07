import { Footer } from '../Footer/component'
import { Header } from '../Header/component'
import styles from './styles.module.css'

export const Layout = ({ children }) => {
	return (
		<div className={styles.root}>
			<div>
				<Header className={styles.header} />
				<main>{children}</main>
				<Footer className={styles.footer} />
			</div>
			<div id='modal-container' className={styles.modalContainer}></div>
			<div id='popover-container' className={styles.popoverContainer}></div>
			<div id='tooltip-container' className={styles.tooltipContainer}></div>
		</div>
	)
}
