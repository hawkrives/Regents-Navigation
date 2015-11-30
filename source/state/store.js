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
				filterState => addLocation(filterState, action.roomInfo))
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

const store = applyMiddleware(promiseMiddleware)(createStore)(reducer)

export function getData() {
	return {
		type: RETRIEVE_JSON,
		payload: retrieveJson('https://www.stolaf.edu/people/rives/courses/terms/20151.json').then(data => ({
			data,
			term: 20151,
		})),
	}
}

export default store