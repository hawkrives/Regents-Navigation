import React from 'react'
import {Link} from 'react-router'
import RoundButton from './round-button'
import Icon from './icon'

class HelpButton extends React.Component {
	render() {
		return (
			<RoundButton><Link to='/help'><Icon name='ionicon-help'/></Link></RoundButton>
		)
	}
}

export default HelpButton
