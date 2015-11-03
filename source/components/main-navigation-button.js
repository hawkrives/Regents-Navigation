import React from 'react'
import styles from './our-styles.less'

class MainNavigationButton extends React.Component {
	render() {
		return (
			<button className={styles['main-navigation-button']}>{this.props.children}</button>
			)
	}
}

export default MainNavigationButton