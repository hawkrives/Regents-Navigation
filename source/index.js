require('babel-runtime/core-js/promise').default = require('bluebird')
import 'isomorphic-fetch'

import React from 'react'
import ReactDOM from 'react-dom'
import Router, {Route, IndexRoute} from 'react-router'

import App from './components/app'
import MainMenu from './components/main-menu'

const routes = (
	<Route path='/' component={App}>
		<IndexRoute component={MainMenu} />
	</Route>
)

// run it
console.log('3. 2.. 1... Blast off! 🚀')

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'))

//require('babel-runtime/core-js/promise').default = require('bluebird')
//import 'isomorphic-fetch'

//import React from 'react'
//import ReactDOM from 'react-dom'
//import Router, {Route, IndexRoute} from 'react-router'

//import App from './components/app'
//import Button from './components/button'

//let wrapComponent = function(Component, props) {
//	return React.createClass({
//		render: function() {
//			return React.createElement(Component, props)
//		},
//	})
//}

//const routes = (
//	<Route path= '/' component={App}>
//		<IndexRoute handler={wrapComponent(Button, {name: 'Start'})} />
//	</Route>
//)

//run it
//console.log('printing!')

//ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'))