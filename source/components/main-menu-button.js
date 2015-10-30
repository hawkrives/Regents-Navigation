import React from 'react'
import {Link} from 'react-router'
import RoundButton from './round-button'
import Icon from './icon'

class MainMenuButton extends React.Component {
	render() {
		return (
			<RoundButton><Link to='/'><Icon name='ionicon-home' /></Link></RoundButton>
		)
	}
}

export default MainMenuButton
