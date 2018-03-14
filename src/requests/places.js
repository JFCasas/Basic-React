function getPlaces(){

	return fetch("http://127.0.0.1:3001/places")

		.then((response)=>{

			return response.json()
		})

		.catch((error)=>{

			console.log(error)
		})
}

function getPlace(slug){

	return fetch("http://127.0.0.1:3001/places/" + slug)

		.then((response)=>{

			return response.json()
		})

		.catch((error)=>{

			console.log(error)
		})
}

export {getPlaces, getPlace}


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
