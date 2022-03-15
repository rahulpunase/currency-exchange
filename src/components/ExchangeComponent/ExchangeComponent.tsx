import React, {FC, useEffect, useState} from 'react';
import styles from './ExchangeComponent.module.scss';
import Input from "../Input/Input";
import Select, {IOption} from "../Select/Select";
import Button from "../Button/Button";
import {NavLink} from 'react-router-dom';
import {useSelector} from "react-redux";
import {IStore} from "../../redux/store";
import Utils from "../../Utils/utils";
import {IRateDictionary} from "../../redux/app-configuration/app-configuration.reducer";

interface ExchangeComponentProps {
	defaultFrom?: string;
	defaultTo?: string;
}

const ExchangeComponent: FC<ExchangeComponentProps> = (props) => {
	const appConfiguration = useSelector((store: IStore) => store.appConfiguration);
	const [fromSelected, setFromSelected] = useState(appConfiguration.defaultFrom);
	const [toSelected, setToSelected] = useState(appConfiguration.defaultTo);


	const [amount, setAmount] = useState('0');
	const [resultRate, setResultRate] = useState('0.00');
	const [multipliedRatesToShow, setMultipliedRatesToShow] = useState('0.00');
	const rates = appConfiguration.rates;

	const fromChangeHandler = (option: IOption): void => {
		setFromSelected(option.value);
	}

	const toChangeHandler = (option: IOption): void => {
		setToSelected(option.value);
	}

	const amountChangeHandler = (value: string): void => {
		setAmount(value);
	}

	const toggleHandler = (): void => {
		setToSelected(fromSelected);
		setFromSelected(toSelected);
	}

	const calculateTheExchangeRate = (from: string, to: string, rates: IRateDictionary) => {
		const getFromRate = rates[from];
		const getToRates = rates[to];
		const toMultiply = getToRates/getFromRate;
		setMultipliedRatesToShow(toMultiply.toFixed(4));
		setResultRate((Number(amount) * toMultiply).toFixed(4));
	}

	const convertHandler = (): void => {
		calculateTheExchangeRate(fromSelected, toSelected, rates);
	}


	useEffect(() => {
		calculateTheExchangeRate(fromSelected, toSelected, rates);
	}, [toSelected, fromSelected, amount]);

	useEffect(() => {
		if (props.defaultFrom && props.defaultTo) {
			setFromSelected(props.defaultFrom);
			setToSelected(props.defaultTo);
		}
	}, [props]);

	return <div className={styles.ExchangeComponent} data-testid="ExchangeComponent">
		<div className={styles.container}>
			<div className={styles.col4}>
				<div className={styles.inputHolder}>
					<Input type={'number'}
					       label={'Amount'}
					       defaultValue={amount}
					       onValueChange={amountChangeHandler}/>
				</div>
				<div className={styles.exchangeRateDescription}>
					1.00 {fromSelected} = {multipliedRatesToShow} {toSelected}
				</div>
			</div>
			<div className={styles.col8}>
				<div className={styles.row}>
					<Select
						selectedOption={fromSelected}
						options={Utils.mapOptionsFromRates(rates)}
						onSelectChange={fromChangeHandler}
						label={'From'}
					/>
					<div className={styles.toggleButton}>
						<Button clickHandler={toggleHandler}>
							<span><i className="fa-solid fa-repeat"/></span>
						</Button>
					</div>
					<Select
						selectedOption={toSelected}
						options={Utils.mapOptionsFromRates(rates)}
						onSelectChange={toChangeHandler}
						label={'To'}
					/>
				</div>
				<div className={styles.row}>
					<Button clickHandler={convertHandler}>
						<span>Convert</span>
					</Button>
				</div>
				<div className={styles.row}>
					<div className={styles.result}>
						<span>{resultRate} {toSelected}</span>
					</div>
					<div className={styles.linkHolder}>
						<NavLink to={'/details'}>More Details</NavLink>
					</div>
				</div>
			</div>
		</div>
	</div>
};

export default ExchangeComponent;
