import React, {Component, cloneElement, PropTypes} from 'react'
import '../styles/index.less'
import {connect} from 'react-redux'

import {getData} from '../state/store'

/* Base component for the application */
export class App extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		store: PropTypes.object.isRequired,
	}
	render() {
		console.log(this.props.store.toJS())
		if (!this.props.store.get('courses')) {
			return (<div>
				nothing 
				<button onClick={() => this.props.dispatch(getData())}>fetch</button>
			</div>)
		}
		return (
			<ul>
				{this.props.store
					.get('courses')
					.get(20151)
					.map(c => JSON.stringify(c))
					.map((c, i) => <li key={i}>{c}</li>)}
			</ul>
		)
			/*<div>
				{cloneElement(this.props.children)}
			</div>*/
	}
}

/* @param state= The redux state of the application
   @return state mapped to the prop store */
function mapStateToProps(state) {
	return {
		store: state,
	}
}

export default connect(mapStateToProps)(App)