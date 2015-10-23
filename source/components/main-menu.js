import React from 'react'
import Button from './button'
import styles from './main-menu.less'

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
				<Button>Start New Navigation</Button><br/>
				<Button>Start Saved Navigation</Button><br/>
				<Button>Settings</Button><br/>
				<Button>Quit</Button><br/>
				</div>
			</div>
			)
	}
}

export default MainMenu