import React from 'react'
import FAB from './fab'
import Icon from './icon'

function FABs() {
	return (
		<div>
			<FAB to='/'><Icon name='ionicons-ios-home' /></FAB>
			<FAB to='/help'>?</FAB>
		</div>
	)
}

export default FABs
