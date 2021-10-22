import {todos} from '../types';

export const fetchTodos = () => ({type: todos.FETCH_TODOS});
export const fetchTodosSuccess = (data) => ({type: todos.FETCH_TODOS_SUCCESS, payload: data});
export const fetchTodosFailure = () => ({type: todos.FETCH_TODOS_FAILURE});

export const fetchTodo = (id) => ({type: todos.FETCH_TODO, payload: id});
export const fetchTodoSuccess = (data) => ({type: todos.FETCH_TODO_SUCCESS, payload: data});
export const fetchTodoFailure = () => ({type: todos.FETCH_TODO_FAILURE});

export const deleteTodo = (id) => ({type: todos.DELETE_TODO, payload: id});
export const deleteTodoSuccess = () => ({type: todos.DELETE_TODO_SUCCESS});
export const deleteTodoFailure = () => ({type: todos.DELETE_TODO_FAILURE});
