import {todos} from '../types';
const initialState = {
    loading: false,
    error: false,
    items: [],
    item: null,
};

const todoReducer =  (state = initialState, action) => {
    switch(action.type) {
        case todos.FETCH_TODOS:
            return {...state, loading: true}
        case todos.FETCH_TODOS_SUCCESS:
            return {...state, loading: false, items: action.payload};
        case todos.FETCH_TODOS_FAILURE:
            return {...state, loading: false, error: true}
        case todos.FETCH_TODO:
            return {...state, loading: true}
        case todos.FETCH_TODO_SUCCESS:
            return {...state, loading: false, item: action.payload};
        case todos.FETCH_TODO_FAILURE:
            return {...state, loading: false, error: true}
        default:
            return state;
    }
}

export default todoReducer;