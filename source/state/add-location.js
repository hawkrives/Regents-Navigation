import {Record} from 'immutable'

export const RoomInfo = Record({
	room: null, 
	filter: null, 
	class: null})

function addClassLocation(classObject) {
	let json = JSON.parse(classObject)

	if (json.location != undefined) {
		let classRecord = new RoomInfo({room: json.location, filter: 'Classroom', class: json.name})
		return {type: 'ADD_LOCATION', roomInfo: classRecord}
	}
	console.log('No room specified.')
}

export default addClassLocation