import React from 'react'
import BackButton from './back-button'
import styles from './our-styles.less'

class MainNavigationHelp extends React.Component {
	render() {
		return (
			<div>
				<h1 className={styles['help']}>This is where the saved navigation help text will go!</h1>
				<BackButton link_to='/navigation'/>
			</div>
		)
	}
}

export default MainNavigationHelp