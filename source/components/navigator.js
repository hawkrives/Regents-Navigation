import React from 'react'
import {Link} from 'react-router'
import Button from './button'

import styles from './navigator.less'

export default () => (
	<div className={styles['hello-world']}>
		<h1>Navigate!</h1>
		<Button><Link to='/navigate/popular'>Popular Destinations</Link></Button>
		<div>
			Enter your starting location:
			<input className={styles.input} placeholder='Current location' />
		</div>
		<div>
			Enter your desired destination:
			<input className={styles.input} placeholder='Neverland' />
		</div>
		<div>
			<Button>Search!</Button>
		</div>
	</div>
)
