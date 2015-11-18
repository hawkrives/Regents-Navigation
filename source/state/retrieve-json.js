//* @param location=string URL for json
function retrieveJson(location) {
	fetch(location)
		.then(r => r.json)
}

export default retrieveJson