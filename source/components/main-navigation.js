import React from 'react'
import MenuBar from './menu-bar'
import NavigationArea from './navigation-area'
import MainMenuButton from './main-menu-button'
import HelpButton from './help-button'

class MainNavigation extends React.Component {
	render() {
		return (
			<div>
				<MenuBar/>
				<NavigationArea/>
				<div>
					<MainMenuButton/>
					<HelpButton links_to='/mainnavigationhelp'/>
				</div>
			</div>
			)
	}
}

export default MainNavigation