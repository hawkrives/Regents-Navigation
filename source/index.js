require('babel-runtime/core-js/promise').default = require('bluebird')
import 'isomorphic-fetch'

import React from 'react'
import ReactDOM from 'react-dom'
import Router, {Route, IndexRoute} from 'react-router'

import App from './components/app'
import HelloWorld from './components/hello-world'

const routes = (
	<Route path='/' component={App}>
		<IndexRoute component={HelloWorld} />
	</Route>
)

// run it
console.log('3. 2.. 1... Blast off! 🚀')

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'))
