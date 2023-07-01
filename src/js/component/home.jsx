import React, { useState } from "react";

const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    return (
        <div id="container">
            <h1 className="todo-header">To do List</h1>
            <input
                id="addToDo"
                type="text"
                placeholder="Add to do here"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        setTodos(todos.concat(inputValue));
                        setInputValue("");
                    }
                }}
            />
            <ul>
                {todos.map((item, index) => (
                    <li key={index}>
                        <span>
                            <i className="fa fa-trash" onClick={() => setTodos(todos.filter((t, currentIndex) => index !== currentIndex))}></i>
                        </span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;