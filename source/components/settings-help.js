import React from 'react'
import styles from './settings-help.less'
import BackButton from './back-button'

class SettingsHelp extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h1 className={styles['help']}>This is where the saved navigation help text will go!</h1>
				</div>
				<div>
					<BackButton link_to='/settings'/>
				</div>
			</div>
		)
	}
}

export default SettingsHelp