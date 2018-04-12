import * as requests from '../requests/visits'

export function addVisitSuccess(visit){

	return {type: 'ADD_VISIT' , visit}
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