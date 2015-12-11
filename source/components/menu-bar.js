import React from 'react'
import { Link } from 'react-router'
import MainNavigationButton from './main-navigation-button'
import styles from './our-styles.less'

class MenuBar extends React.Component {
	render() {
		return (
			<div>
				<MainNavigationButton><Link to='/search'>Search</Link></MainNavigationButton>
				<MainNavigationButton>Save</MainNavigationButton>
				<p className={styles['destination']}>Destination</p>
				<MainNavigationButton><Link to='commondestinations'>Locations</Link></MainNavigationButton>
				<MainNavigationButton>Labels</MainNavigationButton> <hr/>
			</div>
			)
	}
}

export default MenuBar