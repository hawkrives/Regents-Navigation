import React from 'react'
import styles from './our-styles.less'
import BackButton from './back-button'

class SavedNavigationHelp extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h1 className={styles['help']}>This is where the saved navigation help text will go!</h1>
				</div>
				<div>
					<BackButton link_to='/savednavigationscreen'/>
				</div>
			</div>
		)
	}
}

export default SavedNavigationHelp