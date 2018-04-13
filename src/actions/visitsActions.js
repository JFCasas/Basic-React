import * as requests from '../requests/visits'

export function addVisitSuccess(visit){

	return {type: 'ADD_VISIT' , visit}
}

export function loadVisitsPlaceSuccess(visits){

	return {type: 'LOAD_VISITS', visits}
}


export function addVisit(data){

	return(dispatch,getState) => {

		let user = getState().user

		if (!user) return null

		requests.createVisit(data,user.jwt).then((result)=>{

			dispatch(addVisitSuccess(result))
		})
	}
}

export function loadVisits(slug){

	return(dispatch,getState) =>{

		requests.loadVisitsPlace(slug).then((result)=>{

			dispatch(loadVisitsPlaceSuccess(result))
		})

	}
}