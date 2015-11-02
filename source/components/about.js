import React from 'react'
import styles from './our-styles.less'
import BackButton from './back-button'

class About extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h1 className={styles['about']}>This is where the about text will go!</h1>
				</div>
				<div>
					<BackButton link_to='/'/>
				</div>
			</div>
		)
	}
}

export default About