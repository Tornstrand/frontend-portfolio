import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const App = () => {
    // Hanterar todo-items och det nya todo-objektet
    const [todos, setTodos] = useState([
        { text: 'Lär dig React', completed: false },
    ]);
    const [newTodo, setNewTodo] = useState('');

    // Lägger till ett nytt todo-item
    const handleAddTodo = (e) => {
        e.preventDefault();
        if (newTodo.trim() === '') return; // Tomma todos ignoreras
        setTodos([...todos, { text: newTodo, completed: false }]);
        setNewTodo(''); // Rensa input-fältet efter tillägg
    };

    // Markera som komplett/icke-komplett
    const handleToggleComplete = (index) => {
        const updatedTodos = todos.map((todo, i) => 
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    // Ta bort ett todo-item
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
            <TodoList 
                todos={todos} 
                toggleComplete={handleToggleComplete} 
                deleteTodo={handleDeleteTodo} 
            />
        </div>
    );
};

export default App;
