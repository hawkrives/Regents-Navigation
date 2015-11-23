//* @param location=string URL for json
require('babel-runtime/core-js/promise').default = require('bluebird')

function retrieveJson(location) {
	fetch(location)
		.value(response => response.json())
		//.then(data => console.log(data))
		//.catch()
}

export default retrieveJson