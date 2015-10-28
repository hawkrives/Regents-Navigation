require('babel-runtime/core-js/promise').default = require('bluebird')
import 'isomorphic-fetch'

import React from 'react'
import ReactDOM from 'react-dom'
import Router, {Route, IndexRoute} from 'react-router'

import App from './components/app'
import Start from './components/start'
import Navigator from './components/navigator'
import Settings from './components/settings'

const routes = (
	<Route path='/' component={App}>
		<IndexRoute component={Start} />
		<Route path='navigate'>
			<IndexRoute component={Navigator} />
			<Route path='to' component={Navigator} />
		</Route>
		<Route path='settings' component={Settings} />
	</Route>
)

// run it
console.log('3. 2.. 1... Blast off! 🚀')

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'))
