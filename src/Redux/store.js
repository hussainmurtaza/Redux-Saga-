import {createStore, applyMiddleware} from 'redux';
import createSagamiddleware from 'redux-saga';
import logger from "redux-logger"
import RootReducer from './RootReducer';
import RootSaga from './RootSaga';

const sagaMiddleware = createSagamiddleware();
const store = createStore(RootReducer, applyMiddleware(sagaMiddleware,logger));

sagaMiddleware.run(RootSaga);

export default store;