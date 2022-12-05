import { useState } from "react";
import LabeledInput from "./LabeledInput";
import styles from './CreateTodoForm.module.css'


const CreateToDoForm = ({ addTodo }) => {
    const [todoTitle, setTodoTitle] = useState('')
    const [todoDescription, setTodoDescription] = useState('')

    return (
        <form
            className={styles.form}
            onSubmit={
                (event) => {
                    addTodo({
                        title: todoTitle,
                        description: todoDescription,
                        completed: false
                    });
                    setTodoTitle('');
                    setTodoDescription('');
                    event.preventDefault();
                }
            }
        >

            <LabeledInput
                title={'Todo Title'}
                value={todoTitle}
                setValue={setTodoTitle}
            //note that we're not calling setTodoTitle(), we're merely passing it along. We're saying 'use this function when you want to update todoDescription.

            />

            &nbsp;

            <LabeledInput
                title={'Todo Description'}
                value={todoDescription}
                setValue={setTodoDescription}
            //note that we're not calling setTodoDescription(), we're merely passing it along. We're saying 'use this function when you want to update todoDescription.

            />

            <button>Create Todo</button>
        </form>
    )
};

export default CreateToDoForm;

//&nbsp = non-breaking space character, used for when you need to add a single space b/w elements. 

//if you want to grab/capture any sort of value and store in a react component, you'll want to use usestate.