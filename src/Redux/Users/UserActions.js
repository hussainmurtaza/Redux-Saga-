import USERS from './UserTypes';

const fetchData=(data)=>{
    return{
        type: USERS.USERS_GET,
        payload: data
    }
}

const fetchDataSuccess = (user) =>{
    return{
        type: USERS.USERS_GET_SUCCESS,
        payload: user
    }
}

const fetchDataFailure = (error) =>{
    return{
        type: USERS.USERS_GET_FAILURE,
        payload:{},
        error: error
    }
}

const UserAction={
    fetchData,
    fetchDataSuccess,
    fetchDataFailure
}

export default UserAction