import React from 'react'

class SavedNavigationRow extends React.Component {
	render() {
		return (
			<tr>
				{this.props.children}
			</tr>
			)
	}
}

export default SavedNavigationRow