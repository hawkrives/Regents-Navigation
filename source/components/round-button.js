import React from 'react'
import styles from './our-styles.less'

class RoundButton extends React.Component {
	render() {
		return (
			<button className={styles['round-button']}>
				{this.props.children}
			</button>
		)
	}
}

export default RoundButton
