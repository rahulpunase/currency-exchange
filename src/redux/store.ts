import {combineReducers, createStore} from "redux";
import {AppConfiguration, IAppConfiguration} from "./app-configuration/app-configuration.reducer";

export interface IAction {
	type: string;
	payload: any;
}

export interface IStore {
	appConfiguration: IAppConfiguration
}

const combinedReducers = combineReducers({
	appConfiguration: AppConfiguration
});


export const store = createStore<IStore, any, any, any>(combinedReducers);
