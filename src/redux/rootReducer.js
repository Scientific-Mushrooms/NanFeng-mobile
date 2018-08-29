import { combineReducers } from 'redux';

import counter from './reducers/counter'
import ifFirst from './reducers/ifFirst'
import identityReducer from './reducers/identityReducer'

export default combineReducers({
    counter,
    ifFirst,
    identityReducer,
});