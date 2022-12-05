import TodoCard from "./TodoCard"
import styles from "./TodoList.module.css"

const TodoList = ({ todos, checkTodo }) => {
    return (
        <div className={styles.list_container}>
            {
                !todos.length && <h3 className={styles.taskCompleted}>All Tasks Complete</h3>
            }
            {
                todos.map((todo, idx) => {
                    return <TodoCard
                        key={todo.description}
                        todo={todo}
                        checkTodo={
                            (completed) => {
                                checkTodo(idx, completed);
                            }
                        }
                    />;
                })
            }
        </div>
    );
}

export default TodoList