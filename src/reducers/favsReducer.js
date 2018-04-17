export default function favsReducer(state = [] , action ){

	switch (action.type){
		
		case 'ADD_FAV':

			return [action.placeID].concat(state)

		default: 

			return state
	}

}