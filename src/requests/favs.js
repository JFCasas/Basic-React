import config from '../config/config'

function createFav(data,jwt){

	return fetch(config.url + "/favourites",{

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

export { createFav }