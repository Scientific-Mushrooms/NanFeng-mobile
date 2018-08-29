import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import rootReducer from './rootReducer'


const preloadedState = {
    counter: {
        count: 10,
        factor: 1
    },
    ifFirst:{
        first:true
    },
    identityReducer: {
        user: null,
        instructor: null,
        student: null,
    },
}

const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export default () => {
  let store = createStore(persistedReducer,preloadedState)
  let persistor = persistStore(store)
  return { store, persistor }
}