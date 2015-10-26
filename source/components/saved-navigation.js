import React from 'react'
import MainMenuButton from './main-menu-button'
import HelpButton from './help-button'

class SavedNavigation extends React.Component {
	render() {
		return (
			<div>
				<div>
				<h1>Saved Sessions</h1>
				</div>
				<div>
				<table>
					<thead>
					<tr>
						<th>Start Point</th>
						<th>Destination</th>
					</tr>
					</thead>
					<tbody>
					<tr>
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