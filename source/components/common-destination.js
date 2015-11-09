import React, { PropTypes } from 'react'

class CommonDestination extends React.Component {
	render() {
		return (
			<tr>
				<td>
				{this.props.name}
				</td>
				<td>
				</td>
			</tr>
			)
	}
}

CommonDestination.propTypes = {
	name: PropTypes.string.isRequired,
}

export default CommonDestination