import React, {useEffect} from 'react';
import styles from './App.module.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import DetailPage from './pages/DetailPage/DetailPage';
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import {useDispatch} from "react-redux";
import {fetchData} from "./redux/app-configuration/app-configuration.action";
import mockData from "./data/mockdata.json";
import httpService from "../src/services/http-service";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		httpService.fetchLatestData().then(data => dispatch(fetchData(data)));
	}, []);
	return (
		<div className={styles.App__component}>
			<div className={styles.container}>
				<HeaderComponent/>
				<Switch>
					<Route path={'/'} exact={true}>
						<Redirect to={'/home'} />
					</Route>
					<Route path={'/home'}>
						<HomePage/>
					</Route>
					<Route path={'/details/:id'}>
						<DetailPage/>
					</Route>
				</Switch>
			</div>
		</div>
	);
}

export default App;
