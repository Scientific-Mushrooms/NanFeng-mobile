
import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { createStore ,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import BaseTab from './src/pages/baseTab'
import Splash from './src/pages/Splash'
import { StackNavigator } from 'react-navigation';

import store from './src/redux/store';
//redux持久化存储
import {persistStore, persistCombineReducers} from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';

import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

const TransitionConfiguration = () => ({
  screenInterpolator: (sceneProps) => {
    const { scene } = sceneProps;
    const { route } = scene;
    const params = route.params || {};
    const transition = params.transition || 'forHorizontal';
    return CardStackStyleInterpolator[transition](sceneProps);
  },
});


export const ProfileRoutes = StackNavigator({
  Home: {screen :Splash},
  BaseTab:{ screen: BaseTab},
  }, {
    transitionConfig: TransitionConfiguration,
});

export default class App extends Component {
  render() {
    const { persistor } = configureStore();
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ProfileRoutes/>
        </PersistGate>
      </Provider>
    );
  }
}

