import {todos} from '../types';

export const fetchTodos = () => ({type: todos.FETCH_TODOS});
export const fetchTodosSuccess = (data) => ({type: todos.FETCH_TODOS_SUCCESS, payload: data});
export const fetchTodosFailure = () => ({type: todos.FETCH_TODOS_FAILURE});