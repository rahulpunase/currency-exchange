import React, {FC} from 'react';
import styles from './HomePage.module.scss';
import ExchangeComponent from "../../components/ExchangeComponent/ExchangeComponent";

interface HomePageProps {
}

const HomePage: FC<HomePageProps> = () => (
	<div className={styles.HomePage} data-testid="HomePage">
		<div className={styles.container}>
			<div className={styles.heading}>Currency Exchange</div>
			<ExchangeComponent/>
		</div>
	</div>
);

export default HomePage;
