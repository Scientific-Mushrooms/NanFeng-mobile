
import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import BaseTab from './src/pages/baseTab'
import Splash from './src/pages/Splash'
import { StackNavigator } from 'react-navigation';
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
    return (
      <Provider store={store}>
        <ProfileRoutes/>
      </Provider>
    );
  }
}

