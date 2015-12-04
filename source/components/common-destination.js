import React, { PropTypes } from 'react'

/* A table row that includes the name of the destination and its worldlet. 
   Worldlet is not implemented. */
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