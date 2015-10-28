import React, {cloneElement} from 'react'
import '../styles/index.less'
import Navbar from './navbar'
import FABs from './fabs'

export default function app(props) {
	return (
		<div>
			<Navbar />
			<div>
				{cloneElement(props.children)}
			</div>
			<FABs />
		</div>
	)
}
