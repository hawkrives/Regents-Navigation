import React from 'react'
import styles from './our-styles.less'
import BackButton from './back-button'

class MainMenuHelp extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h1 className={styles['help']}>This is where the main menu help text will go!</h1>
				</div>
				<div>
					<BackButton link_to='/'/>
				</div>
			</div>
		)
	}
}

export default MainMenuHelp