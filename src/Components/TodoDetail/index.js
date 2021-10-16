import React from "react";
import styles from './TodoDetails.module.css';

const TodoDetail = ({details}) => {
    const {id, title, completed, userId} = details;
    return (
        <div className={styles.container}>
            <h3>Details</h3>
            <div>
                <div>Title: {title}</div>
                <div>Completed: {completed ? 'YES' : 'NO'}</div>
            </div>
        </div>
    )
}

export default TodoDetail;