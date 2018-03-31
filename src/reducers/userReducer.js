export default function userReducer(state = {} , action ){

	switch (action.type){
		
		case 'LOG_IN':

			return Object.assign({},state,{jwt:action.jwt})

		case 'LOAD_USER':

			return Object.assign({},state,{

				name: action.user.name,
				_id: action.user._id,
				email: action.user.email
			})

		default: 

			return state
	}

}