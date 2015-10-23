require('babel-runtime/core-js/promise').default = require('bluebird')
import 'isomorphic-fetch'

import React from 'react'
import ReactDOM from 'react-dom'
import Router, {Route, IndexRoute, Link} from 'react-router'

import App from './components/app'
import MainMenu from './components/main-menu'
import CreateNewNavigation from './components/create-new-navigation'

const routes = (
	<Route path='/' component={App}>
		<IndexRoute component={MainMenu} />
			<Route path='createnewnavigation' component={CreateNewNavigation} />
	</Route>
)

// run it
console.log('3. 2.. 1... Blast off! 🚀')

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'))