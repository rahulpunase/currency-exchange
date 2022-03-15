import React, {FC, useState} from 'react';
import styles from './Input.module.scss';

interface InputProps {
	label?: string;
	defaultValue?: string;
	onValueChange: (value: string) => void;
	type: string;
}



const Input: FC<InputProps> = ({defaultValue = '', label, onValueChange, type}) => {
	const [input, setInput] = useState(defaultValue);
	const onChangeHandler = (value: string) => onValueChange(value)
	return <div className={styles.Input}>
			{label && <div>{label}</div>}
			<input className={styles.Input} value={defaultValue}
			       type={type}
			       onChange={(event) => onChangeHandler(event.target.value)} data-testid="Input">
			</input>
	</div>
};

export default Input;
