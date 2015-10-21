import React from 'react'
import Button from './button'
import styles from './hello-world.less'

export default () => {
	return (
		<div className={styles['hello-world']}>
			Hello, World!
			<button>hte</button>
			<Button>Hello Button</Button>
		</div>
	)
}
