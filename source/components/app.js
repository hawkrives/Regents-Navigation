import React, {cloneElement} from 'react'
import '../styles/index.less'

export default function app(props) {
	return (
		<div>
			{cloneElement(props.children)}
		</div>
	)
}
