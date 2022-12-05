import CreateToDoForm from "./CreateToDoForm";
import TodoList from "./TodoList";
import { useState } from "react";

const Main = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        setTodos(todos.concat([todo]));
    }

    const checkTodo = (todoIndex, completed) => {
        setTodos(todos.map((todo, idx) => {
            if (idx === todoIndex) {
                return {
                    ...todo,
                    completed: completed,
                };
            }

            return todo;
        }));
    }

    return (
        <>
            <CreateToDoForm addTodo={addTodo} />,
            <TodoList todos={todos} checkTodo={checkTodo} />
        </>
    );
};

export default Main; 