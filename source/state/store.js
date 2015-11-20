import { createStore } from 'redux'
import {List, Map} from 'immutable'
//import RoomInfo from './add-location'

let INITIAL_STATE = Map(
	{semester: 201501}
	)

function addLocation(locationState, location) {
	return locationState.mergeIn(
		['possibleDestinations', 'filters', location.filter ],
		List() //value to assign if not initialized
	)
}

function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
	case 'ADD_LOCATION':
		return state.updateIn(['possibleDestinations', 'filter'], filterState => addLocation(filterState, action.roomInfo))
	default:
		return state
	}
	return state
}

const store = createStore(reducer)

export default store