import {takeEvery, call, put} from 'redux-saga/effects';
import {todos} from '../types';
import api from '../../services/todos.service';
import { fetchTodoFailure, fetchTodosFailure, fetchTodosSuccess, fetchTodoSuccess } from '../actions/todos.actions';

// WORKERS
function* fetchTodos() {
    try {
        const todos = yield call(api.get);
        yield put(fetchTodosSuccess(todos.data));
    } catch(error) {
        yield put(fetchTodosFailure());
    }
}

function* fetchTodo(action) { // The saga actually take the dispatched action as parameter
    try {
        const todo = yield call(api.show, action.payload);
        yield put(fetchTodoSuccess(todo.data));
    } catch(error) {
        yield put(fetchTodoFailure());
    }
}

// WATCHERS
export function* watchFetchTodos() {
    yield takeEvery(todos.FETCH_TODOS, fetchTodos);
}

export function* watchFetchTodo() {
    yield takeEvery(todos.FETCH_TODO, fetchTodo);
}