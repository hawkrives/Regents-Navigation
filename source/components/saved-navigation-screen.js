import React from 'react'
import MainMenuButton from './main-menu-button'
import HelpButton from './help-button'
import SavedNavigation from './saved-navigation'
import styles from './saved-navigation-screen.less'
//import range from 'lodash/utility/range'
//import map from 'lodash/collection/map'

class SavedNavigationScreen extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h1 className={styles['heading']}>Saved Sessions</h1>
				</div>
				<div>
					<table className={styles['table']}>
						<thead>
						<tr>
							<th className={styles['border']}>Start Point</th>
							<th className={styles['border']}>Destination</th>
						</tr>
						</thead>
						<tbody>
							<SavedNavigation destination='test' startinglocation='test1'/>
						</tbody>
					</table>
				</div>
				<div>
					<MainMenuButton/>
					<HelpButton link_to= '/savednavigationhelp'/>
				</div>
			</div>
		)
	}
}

export default SavedNavigationScreen
