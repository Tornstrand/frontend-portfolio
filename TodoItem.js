import React from 'react';

const TodoItem = ({ todo, index, toggleComplete, deleteTodo }) => {
    return (
        <li className={todo.completed ? 'completed' : ''}>
            <span onClick={() => toggleComplete(index)}>
                {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)}>Ta bort</button>
        </li>
    );
};

export default TodoItem;
