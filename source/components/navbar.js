import React from 'react'
import {Link} from 'react-router'
import styles from './navbar.less'

export default () => (
	<div>
		<nav className={styles.navbar}>
			<Link to='/'>Regents Navigation</Link>
		</nav>
	</div>
)
