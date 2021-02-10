import {take, call, all} from 'redux-saga/effects';
import {WatchFetchDataSaga} from './Users/UserSaga';

export default function* RootSaga(){
    yield all([
        WatchFetchDataSaga()
    ])
}