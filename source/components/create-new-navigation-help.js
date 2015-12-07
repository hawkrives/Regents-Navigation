import React from 'react'
import styles from './our-styles.less'
import BackButton from './back-button'

/* Displays help text for the create new navigation screen */
class CreateNewNavigationHelp extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h1 className={styles['help']}>Create New Navigation Help</h1>
					<h2 className={styles['help-header']}> What is the starting location field? </h2>
						<p className={styles['help-text']}> The starting location field is the starting position of the user in Regents. By default the application uses their current location.</p>
					<h2 className={styles['help-header']}> What is the ending location field? </h2>
						<p className={styles['help-text']}> The ending location field is the location the user wishes to navigate to. </p>
					<h2 className={styles['help-header']}> What do the buttons do? </h2>
						<h3> Common Destinations </h3>
							<p className={styles['help-text']}> This button brings the user to a page that provides a list of common destinations in Regents. </p>
						<h3> Search </h3>
							<p className={styles['help-text']}> This button brings the user to a screen that allows them to search for a destination. </p>
						<h3> Start Navigation </h3>
							<p className={styles['help-text']}> This button starts the new navigation using the starting and ending locations the user provides. </p>
				</div>
				<div>
					<BackButton link_to='/createnewnavigation'/>
				</div>
			</div>
		)
	}
}

export default CreateNewNavigationHelp