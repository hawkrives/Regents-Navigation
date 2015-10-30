import React from 'react'
import SettingsButton from './settings-button'
import MainMenuButton from './main-menu-button'
import HelpButton from './help-button'
//import styles from './settings.less'

class Settings extends React.Component {
	render() {
		return (
			<div>
				<h1>Settings</h1>
				<div>
					<h3>Volume</h3>
					<SettingsButton>On</SettingsButton><SettingsButton>Off</SettingsButton>
				</div>
				<div>
					<MainMenuButton/> <br/>
					<HelpButton link_to= 'settingshelp' />
				</div>
			</div>
			)
	}
}

export default Settings