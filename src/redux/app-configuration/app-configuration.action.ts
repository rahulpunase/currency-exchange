import {IAction} from "../store";

export const FETCH_DATA_FROM_API = 'FETCH_DATA_FROM_API';

export const fetchData = (payload: any): IAction => ({
	type: FETCH_DATA_FROM_API,
	payload: payload
});
