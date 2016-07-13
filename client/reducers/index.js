import { combineReducers, applyMiddleware } from 'redux';
import config from './config';
// TODO: try to import * from './' instead of importing individual reducers

const rootReducer = combineReducers({
	config
});

export default rootReducer;
