import config from '../config/config'

function getPlaces(){

	return fetch(config.url+"/places")

		.then((response)=>{

			return response.json()
		})

		.catch((error)=>{

			console.log(error)
		})
}

function getPlace(slug){

	return fetch(config.url + "/places/" + slug)

		.then((response)=>{

			return response.json()
		})

		.catch((error)=>{

			console.log(error)
		})
}

function createPlace(data,jwt){

	let formData = new FormData()

	for (let field in data){

		formData.append(field,data[field])
	}


	return fetch(config.url+"/places", {

		method: 'POST',
		body: formData,
		headers:{
			'Authorization' : 'Bearer ' + jwt,
			'Accept': 'application/json'
		}
	}).then((response)=>{

		return response.json()
	
	}).catch((error)=>{

		console.log(error)
	})
}

export {getPlaces, getPlace,createPlace}


export default {

	places : [

		{

			imageUrl : '/images/place-1.jpeg',
			title : 'Primer negocio',
			description: 'Primera descripción de mi negocio',
			address: "Calle Melancolia"

		},

		{

			imageUrl : '/images/place-2.jpeg',
			title : 'Segundo negocio',
			description: 'Segunda descripción de mi negocio',
			address: "Calle Melancolia"
		},

		{

			imageUrl : '/images/place-3.jpeg',
			title : 'Tercer negocio',
			description: 'Tercera descripción de mi negocio',
			address: "Calle Melancolia"
		},

	]
}
