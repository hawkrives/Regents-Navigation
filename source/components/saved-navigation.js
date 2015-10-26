import React from 'react'
import MainMenuButton from './main-menu-button'
import HelpButton from './help-button'
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
					<tr>
						<td className={styles['border']}>Test Cell</td>
					</tr>
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