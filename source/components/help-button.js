import React from 'react'
import {Link} from 'react-router'
import RoundButton from './round-button'

class HelpButton extends RoundButton {
	render() {
		return (
			<RoundButton><Link to='/help'>?</Link></RoundButton>
			)
	}
}

export default HelpButton