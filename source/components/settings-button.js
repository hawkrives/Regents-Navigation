import React from 'react'
import styles from './settings-button.less'

class SettingsButton extends React.Component {
	render() {
		return (
				<button className={styles['button']}>
					{this.props.children}
				</button>
			)
	}
}

export default SettingsButton