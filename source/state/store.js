import { createStore } from 'redux'
import {List, Map} from 'immutable'

let INITIAL_STATE = Map(
	{semester: 201501}
	)

function addLocation(locationState, location) {
	return locationState.updateIn(
		['possibleDestinations', 'filters', ],
		Map(), //value to assign if not initialized

		)
}

function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
	case 'ADD_LOCATION'
		return x
	}
	return state
}

const store = createStore()

export default store