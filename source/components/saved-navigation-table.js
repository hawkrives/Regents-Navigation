import React from 'react'
import styles from './our-styles.less'

class SavedNavigationTable extends React.Component {
	render() {
		return (
			<table className={styles['saved-navigation-table']}>
				<thead>
					<tr>
						<th>
						Starting Location
						</th>
						<th>
						Destination
						</th>
					</tr>
				</thead>
				<tbody>
					{this.props.children}
				</tbody>
			</table>
			)
	}
}

export default SavedNavigationTable