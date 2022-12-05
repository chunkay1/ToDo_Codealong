import styles from "./TodoCard.module.css"

const TodoCard = ({ todo, checkTodo, }) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.card_title}>
                {todo.title}
            </h3>

            <span
                className={styles.card_description}>
                {todo.description}
            </span>

            <div>
                <input
                    type={'checkbox'}
                    checked={todo.completed}
                    onChange={() => checkTodo(!todo.completed)}
                />
                <span>
                    {todo.completed ? 'Complete' :
                        'Incomplete'}
                </span>
                {/* The above is the same as 
                    if (completed === true) {
                        span.innerHTML = 'Complete'
                    } else {
                        span.innerHTML = 'Incomplete'
                    } */}
            </div>

        </div>
    );
}

export default TodoCard;