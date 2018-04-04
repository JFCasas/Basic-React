import config from '../config/config'

function login(credentials){

	return fetch(config.url + "/sessions",{

		method: 'POST',
		body: JSON.stringify(credentials),
		headers:{
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	}).then((response)=>{

			return response.json()
	
	}).catch((error)=>{

		console.log(error)
	})
}

function signUp(credentials){

	return fetch(config.url + "/users",{

		method: 'POST',
		body: JSON.stringify(credentials),
		headers:{
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	}).then((response)=>{

			return response.json()
	
	}).catch((error)=>{

		console.log(error)
	})
}

export {login,signUp}