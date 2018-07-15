import { combineReducers } from 'redux';

import counter from './reducers/counter'
import ifFirst from './reducers/ifFirst'

export default combineReducers({
    counter,
    ifFirst
});