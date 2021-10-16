import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../../Redux/actions/todos.actions";
import styles from './Todo.module.css';
import TodoDetail from "../TodoDetail";

export default function Todo({todo}) {
    const dispatch = useDispatch();
    const todoDetails = useSelector(state => state.todos.item);
    const {id, title} = todo;

    const getTodoDetails = () => {
        dispatch(fetchTodo(id));
    }

    return (
        <div onClick={getTodoDetails} className={styles.container}>
            {title}
            {todoDetails && (todoDetails.id === id) && (<TodoDetail details={todoDetails} />)}
        </div>
    )
}