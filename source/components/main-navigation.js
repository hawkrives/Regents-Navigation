import React from 'react'
import MenuBar from './menu-bar'
import NavigationArea from './navigation-area'
import MainMenuButton from './main-menu-button'
import HelpButton from './help-button'
import BackButton from './back-button'

class MainNavigation extends React.Component {
	render() {
		return (
			<div>
				<MenuBar/>
				<NavigationArea/>
				<div>
					<BackButton link_to='/createnewnavigation'/>
					<MainMenuButton/>
					<HelpButton link_to='/mainnavigationhelp'/>
				</div>
			</div>
			)
	}
}

export default MainNavigation