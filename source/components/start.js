import React from 'react'
import {Link} from 'react-router'
import Button from './button'

import styles from './start.less'

export default () => (
	<div>
		<header className={styles.header}>
			<p>Welcome to the</p>
			<h1>St. Olaf Navigation System</h1>
		</header>
		<div><Button><Link to='/navigate'>Start New Navigation</Link></Button></div>
		<div><Button><Link to='/navigate/to'>Start Saved Navigation</Link></Button></div>
		<div><Button><Link to='/settings'>Settings</Link></Button></div>
	</div>
)
