import React from 'react'
import SavedNavigationTable from './saved-navigation-table'
import MainMenuButton from './main-menu-button'
import HelpButton from './help-button'
import styles from './saved-navigation.less'

const data = [
	{start: 'RNS 202', end: 'RNS 203'},
	{start: 'RNS 250', end: 'RNS 201'},
	{start: 'RNS 150', end: 'RNS 202'},
]

class SavedNavigation extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h1 className={styles['heading']}>Saved Sessions</h1>
				</div>
				<SavedNavigationTable data={data} />
				<div>
					<MainMenuButton/>
					<HelpButton/>
				</div>
			</div>
		)
	}
}

export default SavedNavigation
