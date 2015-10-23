import React from 'react'
import styles from './starting-location.less'

class StartingLocation extends React.Component {
	render() {
		return (
			<form className={styles['starting-location']}>
				Enter your starting location. <br/>
				<input type='text' name='startinglocation'/>
			</form>
			)
	}
}

export default StartingLocation