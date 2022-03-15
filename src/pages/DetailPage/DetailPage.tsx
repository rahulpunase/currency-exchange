import React, {FC, useEffect, useState} from 'react';
import styles from './DetailPage.module.scss';
import ExchangeComponent from "../../components/ExchangeComponent/ExchangeComponent";
import { useRouteMatch } from "react-router-dom";

interface DetailPageProps {
}

const DetailPage: FC<DetailPageProps> = () => {
	const location = useRouteMatch<{id: string}>();
	const [selectedType, setSelectedType] = useState('');

	useEffect(() => {
		setSelectedType(location.params['id']);
	}, [location.params['id']]);

	return <div className={styles.DetailsPage}>
		<div className={styles.container}>
			<div className={styles.heading}>{location.params.id}</div>
			<ExchangeComponent
				defaultFrom={selectedType.split("-")[0]}
				defaultTo={selectedType.split("-")[1]}
			/>
		</div>
	</div>
};

export default DetailPage;
