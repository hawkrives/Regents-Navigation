import React, { PropTypes } from 'react'

class SearchDestination extends React.Component {
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

SearchDestination.propTypes = {
	name: PropTypes.string.isRequired,
}

export default SearchDestination