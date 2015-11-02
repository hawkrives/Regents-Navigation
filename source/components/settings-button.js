import React from 'react'
import styles from './our-styles.less'

class SettingsButton extends React.Component {
	render() {
		return (
			<button className={styles['settings-button']}>
				{this.props.children}
			</button>
			)
	}
}

export default SettingsButton