const RETRIEVE_JSON = 'RETRIEVE_JSON'

//* @param location=string URL for json
export function retrieveJson(location) {
	return fetch(location)
		.then(response => response.json())
}

export default function getData() {
	return {
		type: RETRIEVE_JSON,
		payload: retrieveJson('https://www.stolaf.edu/people/rives/courses/terms/20151.json').then(data => ({
			data,
			term: 20151,
		})),
	}
}

 