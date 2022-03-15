import React, {FC} from 'react';
import styles from './HeaderComponent.module.scss';
import { NavLink } from 'react-router-dom';

interface HeaderComponentProps {
}

const HeaderComponent: FC<HeaderComponentProps> = () => (
	<header className={styles.HeaderComponent} data-testid="HeaderComponent">
		<div className={styles.container}>
			<NavLink to={'/home'} className={styles.logo}>
				<i className="fa-solid fa-arrow-trend-up"/>
			</NavLink>
			<div className={styles.actionHolder}>
				<NavLink to={'/details/EUR-USD'}>EUR-USD Details</NavLink>
				<NavLink to={'/details/EUR-GBP'}>EUR-GBP Details</NavLink>
			</div>
		</div>
	</header>
);

export default HeaderComponent;
