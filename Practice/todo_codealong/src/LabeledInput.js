import styles from './LabeledInput.module.css';

const LabeledInput = ({ title, value, setValue }) => {
    return (
        <label className={styles.label}>
            {title}&nbsp;
            <input className={styles.input}
                value={value}
                onChange={
                    (event) => {
                        setValue(event.target.value)
                    }
                }
            />
        </label>
    )
}

export default LabeledInput