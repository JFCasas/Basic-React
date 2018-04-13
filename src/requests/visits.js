import config from '../config/config'

function createVisit(data,jwt){

	return fetch(config.url + "/visits",{

		method: 'POST',
		body: JSON.stringify(data),
		headers:{
			'Authorization' : 'Bearer ' + jwt,
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	}).then((response)=>{

			return response.json()
	
	}).catch((error)=>{

		console.log(error)
	})
}

function loadVisitsPlace(slug){

	return fetch(config.url + "/places/" + slug + "/visits" )

		.then((response)=>{

			return response.json()
		
		}).catch((error)=>{

			console.log(error)
		})
	
}


export { createVisit , loadVisitsPlace }