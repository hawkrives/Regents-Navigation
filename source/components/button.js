import React, {PropTypes} from 'react'

import styles from './button.less'

function Button(props) {
	return (
		<button className={styles['button']}>{props.children}</button>
	)
}

Button.propTypes = {
	children: PropTypes.node,
	style: PropTypes.object,
}

export default Button
