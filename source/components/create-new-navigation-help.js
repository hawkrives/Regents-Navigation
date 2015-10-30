import React from 'react'
import styles from './create-new-navigation-help.less'
import BackButton from './back-button'

class CreateNewNavigationHelp extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h1 className={styles['help']}>This is where the create navigation help text will go!</h1>
				</div>
				<div>
					<BackButton link_to='/createnewnavigation'/>
				</div>
			</div>
		)
	}
}

export default CreateNewNavigationHelp