import { createStore } from 'redux';
import rootReducer from './rootReducer';


const preloadedState = {
    counter: {
        count: 10,
        factor: 1
    },
    ifFirst:{
        first:false
    }
}

const store = createStore (
    rootReducer,
    preloadedState
);

export default store;