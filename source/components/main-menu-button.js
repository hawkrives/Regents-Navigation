import React from 'react'
import {Link} from 'react-router'
import RoundButton from './round-button'
import Icon from './icon'

/* Button for navigating to the app's main menu */
class MainMenuButton extends React.Component {
	render() {
		return (
			<RoundButton><Link to='/'><Icon name='ionicon-home' type='inline'/></Link></RoundButton>
		)
	}
}

export default MainMenuButton
