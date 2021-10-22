import { all } from '@redux-saga/core/effects';
import {watchFetchTodos, watchFetchTodo, watchDeleteTodo} from './todos.saga';

function* rootSaga() {
    yield all([
        watchFetchTodos(), // Dont forget to execute the saga
        watchFetchTodo(),
        watchDeleteTodo()
    ]);
}

export default rootSaga;