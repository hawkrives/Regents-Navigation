import React from 'react'
import styles from './saved-navigation-table.less'

import map from 'lodash/collection/map'

class SavedNavigationTable extends React.Component {
	static propTypes = {
		data: React.PropTypes.arrayOf(React.PropTypes.object),
	}

	render() {
		return (
			<table className={styles['table']}>
				<thead>
					<tr>
						<th className={styles['border']}>Start Point</th>
						<th className={styles['border']}>Destination</th>
					</tr>
				</thead>
				<tbody>
					{map(this.props.data, item =>
						<tr>
							<td className={styles['border']}>{item.start}</td>
							<td className={styles['border']}>{item.end}</td>
						</tr>
					)}
				</tbody>
			</table>
		)
	}
}

export default SavedNavigationTable
