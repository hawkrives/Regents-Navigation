import React from 'react'
import styles from './round-button.less'

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