//* @param location=string URL for json

function retrieveJson(location) {
	return fetch(location)
		.then(response => response.json())
		//.then(data => console.log(data))
		//.catch()
}

export default retrieveJson