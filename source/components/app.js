import React, {Component, cloneElement, PropTypes} from 'react'
import '../styles/index.less'
import {connect} from 'react-redux'

import getData from '../state/retrieve-json'
import addClassLocation from '../state/add-location'

/* Base component for the application */
export class App extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		store: PropTypes.object.isRequired,
	}
	componentWillMount() {
		{this.props.dispatch(getData())}
		//let term = {this.props.store.get('semester')}
		//console.log({this.props.store.getIn(['courses', 20151])})
	}
	render() {
		return (
			<div>
				{cloneElement(this.props.children)}
			</div>
		)
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