import React from 'react'
import {Link} from 'react-router'
import Button from './button'
import styles from './our-styles.less'

/* The main menu page. */
class MainMenu extends React.Component {
	render() {
		return (
			<div>
				<div>
				<h1 className ={styles['main-menu']}> Welcome to the St. Olaf Navigation System</h1>
				</div>
				<div>
				<h3 className={styles['main-menu']}> Main Menu </h3>
				</div>
				<div>
				<Button><Link to='/createnewnavigation'>Start New Navigation</Link></Button><br/>
				<Button><Link to='/savednavigationscreen'>Start Saved Navigation</Link></Button><br/>
				<Button><Link to='/settings'>Settings</Link></Button><br/>
				<Button><Link to='/mainmenuhelp'>Help</Link></Button><br/>
				<Button><Link to='/about'>About</Link></Button><br/>
				</div>
				<div>
				<h3 className={styles['main-menu']}> If you need help to quit, we can't help you. </h3>
				</div>
			</div>
			)
	}
}

export default MainMenu