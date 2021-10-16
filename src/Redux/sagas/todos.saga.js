import {takeEvery, call, put} from 'redux-saga/effects';
import {todos} from '../types';
import api from '../../services/todos.service';
import { fetchTodosFailure, fetchTodosSuccess } from '../actions/todos.actions';

// WORKERS
function* fetchTodos() {
    try {
        const todos = yield call(api.get);
        yield put(fetchTodosSuccess(todos.data));

    } catch(error) {
        yield put(fetchTodosFailure());
    }
}

// WATCHERS
export function* watchFetchTodos() {
    yield takeEvery(todos.FETCH_TODOS, fetchTodos);
}