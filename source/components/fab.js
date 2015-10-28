import React, {PropTypes} from 'react'
import styles from './fab.less'

export default function FAB(props) {
	return (
		<div className={styles.fab}>
			{props.children}
		</div>
	)
}

FAB.propTypes = {
	children: PropTypes.node.isRequired,
	to: PropTypes.string.isRequired,
}
