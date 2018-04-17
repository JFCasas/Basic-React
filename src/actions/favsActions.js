import * as requests from '../requests/favs'

export function addFavSuccess(placeID){

	return {type: 'ADD_FAV' , placeID}
}


export function addFav(data){

	return(dispatch,getState) => {

		let user = getState().user

		if (!user) return null

		requests.createFav(data,user.jwt).then((result)=>{

			let placeID = result._place

			dispatch(addFavSuccess(placeID))
		})
	}
}

