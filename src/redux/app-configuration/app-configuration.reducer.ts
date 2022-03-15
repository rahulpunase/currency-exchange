import {IAction} from "../store";
import {FETCH_DATA_FROM_API} from "./app-configuration.action";

export interface IRateDictionary {
	[key: string]: number
}

export interface IAppConfiguration {
	base: string;
	rates: IRateDictionary,
	defaultFrom: string,
	defaultTo: string
}

const defaultState: IAppConfiguration = {
	base: '',
	rates: {},
	defaultFrom: 'EUR',
	defaultTo: 'USD'
}


export const AppConfiguration = (state = defaultState, action: IAction): IAppConfiguration => {
	switch (action.type) {
		case FETCH_DATA_FROM_API: {
			return {
				...state,
				rates: action.payload.rates,
				base: action.payload.base
			}
		}
		default: {
			return state;
		}
	}
}
