import React from 'react'
import SettingsButton from './settings-button'
import MainMenuButton from './main-menu-button'
import HelpButton from './help-button'
import Icon from './icon'
import styles from './settings.less'

class Settings extends React.Component {
	render() {
		return (
			<div>
				<h1 className= {styles['settings']}>Settings</h1>
				<div>
					<h3 className= {styles['settings-type']}>Volume</h3>
					<SettingsButton>On</SettingsButton><SettingsButton>Off</SettingsButton>
				</div> <br/>
				<div>
					<input type='range' min='0' max='100' value='50' />
				</div>
				<div>
					<h3 className= {styles['settings-type']}>Color Scheme</h3>
					<SettingsButton>Default</SettingsButton><SettingsButton>Red/Green</SettingsButton><SettingsButton>Custom</SettingsButton>
				</div>
				<div>
					<h3 className= {styles['settings-type']}>Text Size</h3>
					<SettingsButton><Icon name='ionicon-minus'/></SettingsButton><SettingsButton>Default</SettingsButton><SettingsButton><Icon name='ionicon-plus'/></SettingsButton>
				</div>
				<div>
					<MainMenuButton/> <br/>
					<HelpButton link_to= '/settingshelp' />
				</div>
			</div>
			)
	}
}

export default Settings