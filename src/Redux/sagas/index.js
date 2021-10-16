import { all } from '@redux-saga/core/effects';
import {watchFetchTodos} from './todos.saga';

function* rootSaga() {
    yield all([
        watchFetchTodos() // Dont forget to execute the saga
    ]);
}

export default rootSaga;