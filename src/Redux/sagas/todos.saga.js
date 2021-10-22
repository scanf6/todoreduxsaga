import {takeEvery, call, put, select} from 'redux-saga/effects';
import {todos} from '../types';
import api from '../../services/todos.service';
import {
    deleteTodoFailure,
    deleteTodoSuccess,
    fetchTodoFailure,
    fetchTodosFailure,
    fetchTodosSuccess,
    fetchTodoSuccess
} from '../actions/todos.actions';

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

function* deleteTodo(action) {
    try {
        yield call(api.delete, action.payload);

        // Select the todos actually in the state right now
        const todos = yield select(state => state.todos); // The select effect allow to select a piece of state in a saga

        const newTodos = todos.items.filter(todo => todo.id !== action.payload);
        yield put(fetchTodosSuccess(newTodos));
        yield put(deleteTodoSuccess());
    } catch(error) {
        yield put(deleteTodoFailure());
    }
}

// WATCHERS
export function* watchFetchTodos() {
    yield takeEvery(todos.FETCH_TODOS, fetchTodos);
}

export function* watchFetchTodo() {
    yield takeEvery(todos.FETCH_TODO, fetchTodo);
}

export function* watchDeleteTodo() {
    yield takeEvery(todos.DELETE_TODO, deleteTodo);
}