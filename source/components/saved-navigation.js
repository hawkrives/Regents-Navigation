import React from 'react'
import MainMenuButton from './main-menu-button'
import HelpButton from './help-button'
import SavedNavigationTable from './saved-navigation-table'
import styles from './saved-navigation.less'

class SavedNavigation extends React.Component {
	render() {
		return (
			<div>
				<div>
				<h1 className={styles['heading']}>Saved Sessions</h1>
				</div>
				<div>
				<SavedNavigationTable>
				<tr>
					<td> Test </td>
					<td> Test 2 </td>
				</tr>
				</SavedNavigationTable>
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