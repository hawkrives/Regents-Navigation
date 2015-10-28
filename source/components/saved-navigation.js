import React from 'react'
import MainMenuButton from './main-menu-button'
import HelpButton from './help-button'
import styles from './saved-navigation.less'
import range from 'lodash/utility/range'
import map from 'lodash/collection/map'

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
							{map(range(2), i =>
								<tr>
									<td>Test Start {i+1}</td>
									<td>Test Destination {i+1}</td>
								</tr>
							)}
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
