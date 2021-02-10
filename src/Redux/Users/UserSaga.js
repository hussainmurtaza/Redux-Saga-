import {takeEvery, call, put} from 'redux-saga/effects';
import USERS from './UserTypes';
import axios from 'axios';
import UserAction from './UserActions'


function* asyncFetchRequest(){
    try{
         const url = `https://reqres.in/api/users/`
         const response = yield call(() => axios(url))
         if(response.status == 200){
            yield put(UserAction.fetchDataSuccess(response.data))
         }

         
    }
    catch(error){
    }
}


export function* WatchFetchDataSaga(){
    yield takeEvery(USERS.USERS_GET, asyncFetchRequest)
}