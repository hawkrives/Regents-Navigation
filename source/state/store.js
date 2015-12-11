import { createStore } from 'redux'
import {List, Map} from 'immutable'
import retrieveJson from './retrieve-json'
//import RoomInfo from './add-location'
import promiseMiddleware from 'redux-promise'
import {applyMiddleware} from 'redux'

const ADD_LOCATION = 'ADD_LOCATION'
const RETRIEVE_JSON = 'RETRIEVE_JSON'

let INITIAL_STATE = Map([
	['semester', 20151],
])

function addLocation(locationState, location) {
	return locationState.mergeIn(
		['possibleDestinations', 'filters', location.filter ],
		List() //value to assign if not initialized
	)
}

function reducer(state = INITIAL_STATE, action) {
	const {type, payload} = action
	switch (type) {
		case ADD_LOCATION: {
			return state.updateIn(
				['possibleDestinations', 'filter'], 
				filterState => addLocation(filterState, payload.roomInfo))
		}
		case RETRIEVE_JSON: {
			console.log('RETRIEVE_JSON', payload)
			return state.setIn(
				['courses', payload.term], 
				payload.data)
		}
		default: {
			return state
		}
	}
	return state
}

// let createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)
// const store = createStoreWithMiddleware(reducer)

const store = applyMiddleware(promiseMiddleware)(createStore)(reducer)

export default store