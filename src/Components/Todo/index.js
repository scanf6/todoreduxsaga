import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo, deleteTodo } from "../../Redux/actions/todos.actions";
import styles from './Todo.module.css';
import TodoDetail from "../TodoDetail";

export default function Todo({todo}) {
    const dispatch = useDispatch();
    const todoDetails = useSelector(state => state.todos.item);
    const {id, title} = todo;

    const getTodoDetails = () => {
        dispatch(fetchTodo(id));
    }

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id))
    }

    return (
        <div onClick={getTodoDetails} className={styles.container}>
            {title}
            {todoDetails && (todoDetails.id === id) && (<TodoDetail details={todoDetails} />)}
            <div className={styles.actionButtons}>
                <button>Editer</button>
                <button onClick={() => handleDeleteTodo(id)}>Supprimer</button>
            </div>
        </div>
    )
}