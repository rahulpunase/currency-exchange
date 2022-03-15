import React, {FC, useEffect, useState} from 'react';
import styles from './Select.module.scss';

export interface IOption {
	value: string;
	label: string;
}

interface SelectProps {
	label?: string;
	options: Array<IOption>;
	onSelectChange: (selectedOption: IOption) => void;
	selectedOption: string;
}

const Select: FC<SelectProps> = ({label, options = [], onSelectChange, selectedOption}) => {
	const selectChangeHandler = (value: string) => {
		const option = options.find(option => option.value === value);
		if (option) {
			onSelectChange(option);
		}
	}
	return <div className={styles.Select} data-testid="Select">
		{label && <div>{label}</div>}
		<select value={selectedOption} onChange={(event) => selectChangeHandler(event.target.value)}>
			{options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
		</select>
	</div>
};

export default Select;
