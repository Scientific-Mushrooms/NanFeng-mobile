
import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity, Easing, Animated
} from 'react-native';
import { Provider } from 'react-redux';
import BaseTab from './src/pages/BaseTab'
import Swiper from './src/pages/Swiper'
import Splash from './src/pages/Splash'
import ScrollView from './src/pages/subStackPages/ScrollView'
import ImageView from './src/pages/subStackPages/ImageView';
import Confess from './src/pages/tabPages/confess';
import Search from './src/pages/subStackPages/search';
import NewPost from './src/pages/subStackPages/newPost';
import Notification from './src/pages/subStackPages/notification';
import Chat from './src/pages/subStackPages/chat'

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
/*可能会用到的自定义动画（嘤
export const MyCustomTransition = (index, position) => {
    const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
    });
    const translateX = 0;
    const translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: ([0, 0, 0]),
    });

    return {
        opacity,
        transform: [
            { translateX },
            { translateY }
        ],
    };
};//自定义无动画
const TransitionConfiguration = () =>({
    transitionSpec: {
        duration: 250,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
    },
    screenInterpolator: (sceneProps) => {
        const { layout, position, scene } = sceneProps;
        const { index, route } = scene;
        const params = route.params || {};
        const transition = params.transition || 'default';
        const realHeight = layout.initHeight;
        const translateY = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [realHeight, 0, 0],//outputRange: [height, 0, 0], height改为0，删去动画效果
        })

        const translateY0 = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0, 0, 0],//outputRange: [height, 0, 0], height改为0，删去动画效果
        })
        const opacity = position.interpolate({
            inputRange: [index - 1, index - 0.99, index],
            outputRange: [0, 1, 1],
        })

        return {'default':{ opacity, transform: [{ translateY }] },
            '0':MyCustomTransition(index,position)}[transition]
    },
});*/

export const ProfileRoutes = StackNavigator({
    Home: {screen :Splash},
    Swiper:{screen:Swiper},
    BaseTab:{ screen: BaseTab},
    ScrollView:{ screen: ScrollView},
    ImageView:{ screen: ImageView},
    Confess:{screen:Confess},
    Search:{screen:Search},
    NewPost:{screen:NewPost},
    Notification:{screen:Notification},
    Chat:{screen:Chat},
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

