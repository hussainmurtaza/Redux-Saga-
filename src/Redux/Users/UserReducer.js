import USERS from './UserTypes';

const initialState = {
    loading: false,
    user: {},
    error: {}
}

const UserReducer = (state = initialState, action) =>{
    switch(action.type){
        case USERS.USERS_GET:
            return{
                ...state,
                loading:true
            }
        case USERS.USERS_GET_SUCCESS:
            return{
                ...state,
                loading:false,
                user: action.payload.data,
                error: {}
            }
            
        
        case USERS.USERS_GET_FAILURE:
            return{
                ...state,
                loading:false,
                user: {},
                error: action.error
            }

        default:
            return{
                state
            }
        
    }

}

export default UserReducer