import React from 'react';

const TodoItem = ({ todo, index, toggleComplete, deleteTodo }) => {
    console.log('Rendering TodoItem:', todo);  // Lägg till denna rad

    return (
        <li>
            <span 
                style={{ 
                    textDecoration: todo.completed ? 'line-through' : 'none' 
                }}
                onClick={() => toggleComplete(index)}
            >
                {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)}>Ta bort</button>
        </li>
    );
};

export default TodoItem;
