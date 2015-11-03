import React from 'react'
import NavigationMap from './navigation-map'
import FloorMap from './floor-map'

class NavigationArea extends React.Component {
	render() {
		return(
			<div>
				<NavigationMap/>
				<FloorMap/>
			</div>
			)
	}
}

export default NavigationArea