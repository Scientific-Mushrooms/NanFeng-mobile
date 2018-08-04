
import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Provider } from 'react-redux';
import BaseTab from './src/pages/BaseTab'
import Swiper from './src/pages/Swiper'
import Splash from './src/pages/Splash'
import ScrollView from './src/pages/subStackPages/ScrollView'
import ImageView from './src/pages/subStackPages/ImageView'

import { StackNavigator } from 'react-navigation';

//redux持久化存储
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './src/redux/configureStore'

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
  Swiper:{screen:Swiper},
  BaseTab:{ screen: BaseTab},
  ScrollView:{ screen: ScrollView},
  ImageView:{ screen: ImageView},
  }, {
    transitionConfig: TransitionConfiguration,
});

export default class App extends Component {
  render() {
    const {store, persistor } = configureStore();
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ProfileRoutes/>
        </PersistGate>
      </Provider>
    );
  }
}

