import React from 'react'

//import styles from './button.less'

let Button = React.createClass( {
	render() {
		return (
		<div className= 'button'>
			{this.props.name}
		</div>
		)
	},
})
export default Button