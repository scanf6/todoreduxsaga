import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagasMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagasMiddleware, logger));

sagasMiddleware.run(rootSaga);

export default store;