import React, {FC} from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
	clickHandler: () => void
}

const Button: FC<ButtonProps> = ({children, clickHandler}) => {
	return <button className={styles.Button} data-testid="Button"
	               onClick={() => clickHandler()}
	>
		{children}
	</button>
};

export default Button;
