import React, { useState } from 'react';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (newTodo.trim() === '') return;
        setTodos([...todos, { text: newTodo, completed: false }]);
        setNewTodo('');
    };

    const handleToggleComplete = (index) => {
        const updatedTodos = todos.map((todo, i) => 
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    const handleDeleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div className="container">
            <h1>Att-göra-lista</h1>
            <form onSubmit={handleAddTodo}>
                <input 
                    type="text" 
                    value={newTodo} 
                    onChange={(e) => setNewTodo(e.target.value)} 
                    placeholder="Lägg till en uppgift" 
                />
                <button type="submit">Lägg till</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index} className={todo.completed ? 'completed' : ''}>
                        <span onClick={() => handleToggleComplete(index)}>
                            {todo.text}
                        </span>
                        <button onClick={() => handleDeleteTodo(index)}>Ta bort</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
