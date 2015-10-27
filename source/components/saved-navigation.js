import React from 'react'
import MainMenuButton from './main-menu-button'
import HelpButton from './help-button'
import SavedNavigationRow from './saved-navigation-row'
import styles from './saved-navigation.less'

class SavedNavigation extends React.Component {
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
						<SavedNavigationRow>
							<td>Test Start</td>
							<td>Test Destination</td>
						</SavedNavigationRow>
						<SavedNavigationRow>
							<td>Test Start 2</td>
							<td>Test Destination 2</td>
						</SavedNavigationRow> 
					</tbody>
				</table>
				</div>
				<div>
				<MainMenuButton/>
				<HelpButton/>
				</div>
			</div>
			)
	}
}

export default SavedNavigation