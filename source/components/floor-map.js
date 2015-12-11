import React from 'react'
import ImageLoader from 'react-imageloader'

/* Displays the 2D floor map. 
   Currently not implemented */
class FloorMap extends React.Component {
	render() {
		return(
			<ImageLoader
				src='/images/map_floor_2.png'
				wrapper={React.DOM.div} />
			)
	}
}



export default FloorMap