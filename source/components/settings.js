import React from 'react'
import SettingsButton from './settings-button'
import MainMenuButton from './main-menu-button'
import HelpButton from './help-button'
import Icon from './icon'
import styles from './our-styles.less'

class Settings extends React.Component {
	render() {
		return (
			<div>
				<h1 className= {styles['settings']}>Settings</h1>
				<div>
					<h3 className= {styles['settings-type']}>Color Scheme</h3>
					<SettingsButton>Default</SettingsButton><SettingsButton>Red/Green</SettingsButton><SettingsButton>Custom</SettingsButton>
				</div>
				<div>
					<h3 className= {styles['settings-type']}>Text Size</h3>
					<h4 className= {styles['text-size-type']}>To adjust the size of the text, please do one of the following:</h4>
					<p className= {styles['text-size-type']}>On a Mac, hold <button>Command </button> while pressing either <button><Icon name='ionicon-plus'/></button> or <button><Icon name='ionicon-minus'/></button>.</p>
					<p className= {styles['text-size-type']}>On a Windows, hold <button>Control </button> while pressing either <button><Icon name='ionicon-plus'/></button> or <button><Icon name='ionicon-minus'/></button>.</p>
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