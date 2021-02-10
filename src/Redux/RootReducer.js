import {combineReducers} from 'redux';
import UserReducer from './Users/UserReducer';

const RootReducer = combineReducers({
   userList: UserReducer
})

export default RootReducer;